'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import {
    Folder,
    FileCode,
    Save,
    Trash2,
    Edit2,
    ChevronRight,
    ChevronDown,
    RefreshCw,
    AlertTriangle,
    File as FileIcon,
    Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
    getDirectory,
    getFileContent,
    saveFileContent,
    renameItem,
    deleteItem,
    type FileItem
} from '@/app/actions/files';

export default function FileDirectoryPage() {
    // State
    const [currentPath, setCurrentPath] = useState('');
    const [fileList, setFileList] = useState<FileItem[]>([]);
    const [activeFile, setActiveFile] = useState<{ path: string; content: string; name: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [editModeItem, setEditModeItem] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState('');

    // Load directory on mount and path change
    useEffect(() => {
        loadDirectory(currentPath);
    }, [currentPath]);

    const loadDirectory = async (path: string) => {
        setIsLoading(true);
        const result = await getDirectory(path);
        if (result.success && result.items) {
            setFileList(result.items);
        } else {
            toast.error(result.error || 'Failed to load directory');
        }
        setIsLoading(false);
    };

    const handleFileClick = async (item: FileItem) => {
        if (item.type === 'directory') {
            setCurrentPath(item.path);
        } else {
            // Load file content
            const result = await getFileContent(item.path);
            if (result.success && typeof result.content === 'string') {
                setActiveFile({
                    path: item.path,
                    name: item.name,
                    content: result.content
                });
            } else {
                toast.error(result.error || 'Failed to read file');
            }
        }
    };

    const handleSave = async () => {
        if (!activeFile) return;
        setIsSaving(true);
        const result = await saveFileContent(activeFile.path, activeFile.content);
        if (result.success) {
            toast.success('File saved successfully');
        } else {
            toast.error(result.error || 'Failed to save file');
        }
        setIsSaving(false);
    };

    const handleDelete = async (item: FileItem) => {
        if (!confirm(`Are you sure you want to delete ${item.name}? This cannot be undone.`)) return;

        const result = await deleteItem(item.path);
        if (result.success) {
            toast.success('Item deleted successfully');
            loadDirectory(currentPath);
            if (activeFile?.path === item.path) {
                setActiveFile(null);
            }
        } else {
            toast.error(result.error || 'Failed to delete item');
        }
    };

    const handleRenameStart = (item: FileItem) => {
        setEditModeItem(item.path);
        setRenameValue(item.name);
    };

    const handleRenameSubmit = async (item: FileItem) => {
        if (!renameValue || renameValue === item.name) {
            setEditModeItem(null);
            return;
        }

        const result = await renameItem(item.path, renameValue);
        if (result.success) {
            toast.success('Renamed successfully');
            loadDirectory(currentPath);
            if (activeFile?.path === item.path) {
                setActiveFile(prev => prev ? { ...prev, path: item.path.replace(item.name, renameValue), name: renameValue } : null);
            }
        } else {
            toast.error(result.error || 'Failed to rename');
        }
        setEditModeItem(null);
    };

    const handleBreadcrumbClick = (index: number, parts: string[]) => {
        const newPath = parts.slice(0, index + 1).join('/');
        setCurrentPath(newPath);
    };

    // Helper to determine language for Monaco
    const getLanguage = (filename: string) => {
        const ext = filename.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'ts': case 'tsx': return 'typescript';
            case 'js': case 'jsx': return 'javascript';
            case 'css': return 'css';
            case 'json': return 'json';
            case 'md': return 'markdown';
            case 'html': return 'html';
            case 'sql': return 'sql';
            default: return 'plaintext';
        }
    };

    const pathParts = currentPath.split('/').filter(Boolean);

    return (
        <div className="flex h-[calc(100vh-100px)] gap-6 p-8 w-full animate-in fade-in duration-500">
            {/* Sidebar / Explorer */}
            <div className="w-1/3 min-w-[300px] flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                    <h2 className="font-black text-slate-800 flex items-center gap-2">
                        <Folder size={18} className="text-lime-500" />
                        Explorer
                    </h2>
                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath)} disabled={isLoading}>
                        <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
                    </Button>
                </div>

                {/* Breadcrumbs */}
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-1 text-xs font-bold text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <button
                        onClick={() => setCurrentPath('')}
                        className={`hover:text-black flex items-center gap-1 transition-colors ${currentPath === '' ? 'text-black' : ''}`}
                    >
                        <Home size={14} />
                        root
                    </button>
                    {pathParts.map((part, index) => (
                        <React.Fragment key={index}>
                            <ChevronRight size={12} className="text-slate-300 shrink-0" />
                            <button
                                onClick={() => handleBreadcrumbClick(index, pathParts)}
                                className="hover:text-black transition-colors"
                            >
                                {part}
                            </button>
                        </React.Fragment>
                    ))}
                </div>

                {/* File List */}
                <div className="flex-1 overflow-y-auto p-2">
                    {fileList.length === 0 && !isLoading && (
                        <div className="text-center py-10 text-slate-400 text-sm font-medium">
                            Directory is empty
                        </div>
                    )}

                    <div className="space-y-1">
                        {fileList.map((item) => (
                            <div
                                key={item.path}
                                className={`group flex items-center gap-2 p-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${activeFile?.path === item.path ? 'bg-black text-white' : 'hover:bg-slate-50 text-slate-700'
                                    }`}
                                onClick={() => handleFileClick(item)}
                            >
                                <span className={`shrink-0 ${activeFile?.path === item.path ? 'text-lime-400' : 'text-slate-400 group-hover:text-black'}`}>
                                    {item.type === 'directory' ? <Folder size={16} fill="currentColor" className="opacity-20" /> : <FileIcon size={16} />}
                                </span>

                                {editModeItem === item.path ? (
                                    <input
                                        type="text"
                                        value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        onBlur={() => handleRenameSubmit(item)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleRenameSubmit(item)}
                                        className="bg-white text-black px-2 py-0.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-400 w-full"
                                        autoFocus
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ) : (
                                    <span className="truncate flex-1">{item.name}</span>
                                )}

                                {/* Hover Actions */}
                                <div className={`flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${activeFile?.path === item.path ? 'text-white' : 'text-slate-400'}`}>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleRenameStart(item); }}
                                        className="p-1 hover:bg-white/20 rounded"
                                        title="Rename"
                                    >
                                        <Edit2 size={12} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleDelete(item); }}
                                        className="p-1 hover:bg-rose-500/20 hover:text-rose-500 rounded"
                                        title="Delete"
                                    >
                                        <Trash2 size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden min-w-0">
                {activeFile ? (
                    <>
                        <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <FileCode size={20} className="text-slate-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 leading-none">{activeFile.name}</h3>
                                    <p className="text-xs text-slate-400 mt-1 font-mono">{activeFile.path}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="bg-black hover:bg-slate-800 text-white rounded-xl font-bold flex items-center gap-2"
                                >
                                    <Save size={16} />
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <Editor
                                height="100%"
                                path={activeFile.path}
                                language={getLanguage(activeFile.name)}
                                value={activeFile.content}
                                onChange={(val) => setActiveFile(prev => prev ? { ...prev, content: val || '' } : null)}
                                theme="light"
                                options={{
                                    minimap: { enabled: true },
                                    fontSize: 14,
                                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                                    scrollBeyondLastLine: false,
                                    padding: { top: 20, bottom: 20 },
                                    lineNumbers: 'on',
                                    roundedSelection: true,
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50/30">
                        <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center mb-6">
                            <FileCode size={40} className="text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">No file selected</h3>
                        <p className="text-slate-500 mt-2">Select a file from the explorer to start editing.</p>

                        <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 max-w-sm text-center">
                            <h4 className="flex items-center justify-center gap-2 text-amber-600 font-bold text-sm mb-1">
                                <AlertTriangle size={14} />
                                Warning
                            </h4>
                            <p className="text-amber-800/80 text-xs">
                                Edits made here directly affect the server's filesystem. Proceed with caution.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
