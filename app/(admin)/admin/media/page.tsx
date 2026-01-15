'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
    Search,
    Upload,
    Copy,
    Trash2,
    ExternalLink,
    Image as ImageIcon,
    FileVideo,
    FileText as FileIcon,
    X,
    Check,
    Download,
    Eye,
    LayoutGrid,
    List,
    CheckSquare,
    Square,
    Trash
} from 'lucide-react';
import { getMediaAssets, deleteMediaAsset, deleteMediaAssets, updateMediaMetadata } from '@/app/actions/media';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { SeoImageUpload } from '@/components/admin/seo-image-upload';

interface MediaAsset {
    id: string;
    fileName: string;
    originalName: string;
    altTag: string;
    filePath: string;
    fileSizeKb: number;
    format: string;
    type: string;
    dimensions?: string | null;
    createdAt: string;
}

export default function MediaLibraryPage() {
    const [assets, setAssets] = useState<MediaAsset[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('ALL');
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState<MediaAsset | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        setIsLoading(true);
        const result = await getMediaAssets();
        if (result.success && result.assets) {
            // @ts-ignore
            setAssets(result.assets);
        } else {
            toast.error(result.error || 'Failed to load assets');
        }
        setIsLoading(false);
    };

    const filteredAssets = useMemo(() => {
        return assets.filter(asset => {
            const matchesSearch =
                asset.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                asset.altTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                asset.originalName.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = filterType === 'ALL' || asset.type === filterType;

            return matchesSearch && matchesType;
        });
    }, [assets, searchQuery, filterType]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this asset? This cannot be undone.')) return;

        const result = await deleteMediaAsset(id);
        if (result.success) {
            toast.success('Asset deleted successfully');
            setAssets(assets.filter(a => a.id !== id));
            setIsDetailOpen(false);
            setSelectedAsset(null);
            const newSelected = new Set(selectedIds);
            newSelected.delete(id);
            setSelectedIds(newSelected);
        } else {
            toast.error(result.error);
        }
    };

    const handleBulkDelete = async () => {
        const ids = Array.from(selectedIds);
        if (ids.length === 0) return;
        if (!confirm(`Are you sure you want to delete ${ids.length} assets? This cannot be undone.`)) return;

        const result = await deleteMediaAssets(ids);
        if (result.success) {
            toast.success(`${ids.length} assets deleted successfully`);
            setAssets(assets.filter(a => !selectedIds.has(a.id)));
            setSelectedIds(new Set());
            setIsSelectionMode(false);
        } else {
            toast.error(result.error);
        }
    };

    const toggleSelect = (id: string) => {
        const newSelected = new Set(selectedIds);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedIds(newSelected);
    };

    const toggleAll = () => {
        if (selectedIds.size === filteredAssets.length) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(filteredAssets.map(a => a.id)));
        }
    };

    const copyUrl = (url: string) => {
        const fullUrl = `${window.location.origin}${url}`;
        navigator.clipboard.writeText(fullUrl);
        toast.success('URL copied to clipboard');
    };

    const handleUploadSuccess = (data: any) => {
        setIsUploadModalOpen(false);
        fetchAssets();
        toast.success('Asset uploaded successfully');
    };

    const getIconForType = (type: string) => {
        switch (type) {
            case 'IMAGE': return <ImageIcon className="size-6" />;
            case 'VIDEO': return <FileVideo className="size-6" />;
            default: return <FileIcon className="size-6" />;
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24">
            {/* Header Area */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">Media Library</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage and optimize your digital assets for SEO.</p>
                </div>
                <Button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="bg-black hover:bg-slate-800 text-white rounded-2xl px-6 py-6 h-auto flex items-center gap-2 shadow-xl shadow-slate-200 transition-all active:scale-95"
                >
                    <Upload size={20} />
                    <span className="font-bold">Upload Asset</span>
                </Button>
            </div>

            {/* Controls Area */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-x-auto">
                <div className="relative flex-1 min-w-[300px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search assets..."
                        className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-black transition-all outline-none font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shrink-0">
                    {['ALL', 'IMAGE', 'VIDEO'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${filterType === type ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            {type.charAt(0) + type.slice(1).toLowerCase()}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shrink-0">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        title="Grid View"
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                        title="List View"
                    >
                        <List size={18} />
                    </button>
                </div>
                <Button
                    variant="ghost"
                    onClick={() => {
                        setIsSelectionMode(!isSelectionMode);
                        if (isSelectionMode) setSelectedIds(new Set());
                    }}
                    className={`rounded-2xl px-4 py-2 h-auto flex items-center gap-2 transition-all shrink-0 ${isSelectionMode ? 'bg-black text-white hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                    {isSelectionMode ? <CheckSquare size={18} /> : <Square size={18} />}
                    <span className="font-bold">{isSelectionMode ? 'Cancel' : 'Select'}</span>
                </Button>
            </div>

            {/* Bulk Actions Bar */}
            {isSelectionMode && selectedIds.size > 0 && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-slate-900 text-white px-8 py-4 rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-8 duration-500 max-w-[90vw]">
                    <div className="flex items-center gap-4 border-r border-white/20 pr-6">
                        <button
                            onClick={toggleAll}
                            className="text-sm font-bold hover:text-lime-400 transition-colors whitespace-nowrap"
                        >
                            {selectedIds.size === filteredAssets.length ? 'Deselect All' : 'Select All'}
                        </button>
                        <span className="text-sm font-black text-lime-400 whitespace-nowrap">{selectedIds.size} Selected</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleBulkDelete}
                            className="flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 rounded-xl text-sm font-bold transition-all active:scale-95 whitespace-nowrap"
                        >
                            <Trash size={16} />
                            Delete
                        </button>
                        <button
                            onClick={() => {
                                setIsSelectionMode(false);
                                setSelectedIds(new Set());
                            }}
                            className="px-4 py-2 hover:bg-white/10 rounded-xl text-sm font-bold transition-all whitespace-nowrap"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Content Area */}
            {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="aspect-square bg-slate-100 rounded-3xl animate-pulse" />
                    ))}
                </div>
            ) : filteredAssets.length > 0 ? (
                viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredAssets.map((asset) => (
                            <div
                                key={asset.id}
                                className={`group relative aspect-square bg-white rounded-[2rem] border-2 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${selectedIds.has(asset.id) ? 'border-black ring-2 ring-black/5' : 'border-slate-100 hover:border-black'
                                    }`}
                                onClick={() => {
                                    if (isSelectionMode) {
                                        toggleSelect(asset.id);
                                    } else {
                                        setSelectedAsset(asset);
                                        setIsDetailOpen(true);
                                    }
                                }}
                            >
                                {asset.type === 'IMAGE' ? (
                                    <img
                                        src={asset.filePath}
                                        alt={asset.altTag}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-slate-100 transition-colors">
                                        {getIconForType(asset.type)}
                                        <span className="mt-2 text-[10px] font-black uppercase tracking-widest">{asset.format}</span>
                                    </div>
                                )}

                                {/* Selection Checkbox */}
                                {isSelectionMode && (
                                    <div className="absolute top-4 left-4 z-10 scale-in duration-200">
                                        <div className={`size-6 rounded-lg flex items-center justify-center border-2 transition-all ${selectedIds.has(asset.id) ? 'bg-black border-black text-white' : 'bg-white/80 backdrop-blur-sm border-slate-200 text-transparent'
                                            }`}>
                                            <Check size={16} strokeWidth={4} />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay Info */}
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xs font-bold truncate">{asset.fileName}</p>
                                    <p className="text-white/60 text-[10px] font-medium">{asset.fileSizeKb} KB</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50">
                                        {isSelectionMode && <th className="p-4 w-12"></th>}
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Asset</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Name</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Size</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Dimensions</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAssets.map((asset) => (
                                        <tr
                                            key={asset.id}
                                            className={`group border-b border-slate-50 last:border-0 hover:bg-slate-50/80 transition-colors cursor-pointer ${selectedIds.has(asset.id) ? 'bg-slate-50' : ''
                                                }`}
                                            onClick={() => {
                                                if (isSelectionMode) {
                                                    toggleSelect(asset.id);
                                                } else {
                                                    setSelectedAsset(asset);
                                                    setIsDetailOpen(true);
                                                }
                                            }}
                                        >
                                            {isSelectionMode && (
                                                <td className="p-4">
                                                    <div className={`size-5 rounded-md flex items-center justify-center border-2 transition-all ${selectedIds.has(asset.id) ? 'bg-black border-black text-white' : 'bg-white border-slate-200 text-transparent'
                                                        }`}>
                                                        <Check size={12} strokeWidth={4} />
                                                    </div>
                                                </td>
                                            )}
                                            <td className="p-4">
                                                <div className="size-12 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex items-center justify-center shrink-0">
                                                    {asset.type === 'IMAGE' ? (
                                                        <img src={asset.filePath} alt="" className="w-full h-full object-cover" />
                                                    ) : getIconForType(asset.type)}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <p className="font-bold text-slate-900 text-sm truncate max-w-[200px]">{asset.fileName}</p>
                                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{asset.format}</p>
                                            </td>
                                            <td className="p-4 text-sm font-bold text-slate-500">{asset.fileSizeKb} KB</td>
                                            <td className="p-4 text-sm font-medium text-slate-400">{asset.dimensions || '-'}</td>
                                            <td className="p-4 text-sm font-medium text-slate-500">{new Date(asset.createdAt).toLocaleDateString()}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            copyUrl(asset.filePath);
                                                        }}
                                                        className="p-2 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-black shadow-sm border border-slate-100"
                                                        title="Copy URL"
                                                    >
                                                        <Copy size={16} />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedAsset(asset);
                                                            setIsDetailOpen(true);
                                                        }}
                                                        className="p-2 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-black shadow-sm border border-slate-100"
                                                        title="View Details"
                                                    >
                                                        <Eye size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                    <div className="p-6 bg-slate-50 rounded-full mb-4">
                        <ImageIcon size={48} className="text-slate-200" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">No assets found</h3>
                    <p className="text-slate-500 font-medium">Try adjusting your search or upload something new.</p>
                </div>
            )}

            {/* Upload Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between p-8 border-b border-slate-50">
                            <h2 className="text-2xl font-black tracking-tight">Upload New Asset</h2>
                            <button
                                onClick={() => setIsUploadModalOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-xl transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-8">
                            <SeoImageUpload
                                label="Drop your file here"
                                onUploadSuccess={handleUploadSuccess}
                                allowAllFormats={true}
                            />
                            <div className="mt-6 flex justify-end">
                                <Button
                                    variant="ghost"
                                    onClick={() => setIsUploadModalOpen(false)}
                                    className="font-bold text-slate-500"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Asset Detail Slider/Panel */}
            {isDetailOpen && selectedAsset && (
                <div className="fixed inset-0 z-[110] flex items-center justify-end bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsDetailOpen(false)}
                    />
                    <div className="relative w-full max-w-lg h-full bg-white shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto">
                        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 flex items-center justify-between p-8 border-b border-slate-100">
                            <div className="min-w-0">
                                <h2 className="text-xl font-black truncate">{selectedAsset.fileName}</h2>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{selectedAsset.type}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => copyUrl(selectedAsset.filePath)}
                                    className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all text-slate-600"
                                    title="Copy URL"
                                >
                                    <Copy size={20} />
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedAsset.id)}
                                    className="p-2.5 bg-rose-50 hover:bg-rose-100 rounded-xl transition-all text-rose-500"
                                    title="Delete Asset"
                                >
                                    <Trash2 size={20} />
                                </button>
                                <button
                                    onClick={() => setIsDetailOpen(false)}
                                    className="p-2.5 hover:bg-slate-100 rounded-xl transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Preview Section */}
                            <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-50 border-4 border-slate-50 flex items-center justify-center relative group">
                                {selectedAsset.type === 'IMAGE' ? (
                                    <img
                                        src={selectedAsset.filePath}
                                        className="w-full h-full object-contain"
                                        alt={selectedAsset.altTag}
                                    />
                                ) : selectedAsset.type === 'VIDEO' ? (
                                    <video
                                        src={selectedAsset.filePath}
                                        controls
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <FileIcon size={64} className="text-slate-200" />
                                )}
                                <a
                                    href={selectedAsset.filePath}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold"
                                >
                                    <ExternalLink size={24} className="mr-2" />
                                    View Full Resolution
                                </a>
                            </div>

                            {/* Info Section */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Asset Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Size</p>
                                        <p className="text-sm font-black text-slate-900">{selectedAsset.fileSizeKb} KB</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Format</p>
                                        <p className="text-sm font-black text-slate-900 uppercase">{selectedAsset.format}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Type</p>
                                        <p className="text-sm font-black text-slate-900">{selectedAsset.type}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Created</p>
                                        <p className="text-sm font-black text-slate-900">{new Date(selectedAsset.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    {selectedAsset.dimensions && (
                                        <div className="p-4 bg-slate-50 rounded-2xl col-span-2">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Dimensions</p>
                                            <p className="text-sm font-black text-slate-900">{selectedAsset.dimensions} px</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* SEO Metadata */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">SEO & Accessibility</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="space-y-1.5">
                                        <label className="font-bold text-slate-700">Alt Tag Description</label>
                                        <p className="text-xs text-slate-400 mb-2">Used by screen readers and SEO spiders.</p>
                                        <textarea
                                            className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black outline-none transition-all font-medium min-h-[100px]"
                                            value={selectedAsset.altTag}
                                            onChange={(e) => {
                                                const newAlt = e.target.value;
                                                setSelectedAsset({ ...selectedAsset, altTag: newAlt });
                                                updateMediaMetadata(selectedAsset.id, { altTag: newAlt });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-8 flex flex-col gap-3">
                                <Button
                                    className="w-full bg-black hover:bg-slate-800 text-white rounded-2xl py-6 h-auto font-bold flex items-center justify-center gap-2"
                                    onClick={() => copyUrl(selectedAsset.filePath)}
                                >
                                    <Copy size={18} />
                                    Copy Link
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full border-2 border-slate-100 rounded-2xl py-6 h-auto font-bold flex items-center justify-center gap-2 hover:bg-slate-50"
                                    asChild
                                >
                                    <a href={selectedAsset.filePath} download={selectedAsset.fileName}>
                                        <Download size={18} />
                                        Download Original
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
