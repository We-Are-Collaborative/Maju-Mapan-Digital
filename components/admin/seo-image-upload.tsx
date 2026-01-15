"use client";
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, Sparkles, Image as ImageIcon, X, FileVideo } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface SeoImageUploadProps {
    onUploadSuccess: (data: { url: string; alt: string; size_kb?: string; asset?: any }) => void;
    label?: string;
    description?: string;
    suggestedName?: string;
    allowAllFormats?: boolean;
}

export function SeoImageUpload({
    onUploadSuccess,
    label = "SEO Image Upload",
    description,
    suggestedName: initialSuggestedName,
    allowAllFormats = false
}: SeoImageUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");
    const [altTag, setAltTag] = useState("");
    const [uploading, setUploading] = useState(false);
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        if (initialSuggestedName && !fileName) {
            setFileName(initialSuggestedName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''));
        }
    }, [initialSuggestedName, fileName]);

    const onDrop = (acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[acceptedFiles.length - 1]; // Use last
        if (selectedFile) {
            setFile(selectedFile);
            // Default suggested filename
            const suggested = initialSuggestedName || selectedFile.name.split('.')[0]
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            setFileName(suggested);
            setResult(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: allowAllFormats ? undefined : { 'image/*': [] },
        multiple: false
    });

    const handleUpload = async () => {
        if (!file || !fileName || !altTag) {
            toast.error("Please fill in all SEO fields");
            return;
        }

        if (altTag.length < 10) {
            toast.error("Alt tag is too short (min 10 chars)");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('file_name', fileName);
        formData.append('alt_tag', altTag);

        try {
            const res = await fetch('/api/upload/seo', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();

            if (data.success) {
                setResult(data);
                toast.success(allowAllFormats ? "Asset Uploaded & Optimized!" : "SEO Image Optimized & Uploaded!");
                onUploadSuccess({
                    url: data.file_path,
                    alt: data.alt_tag,
                    size_kb: data.size_kb,
                    asset: data.asset
                });
                setFile(null);
            } else {
                toast.error(data.error || "Upload failed");
            }
        } catch (error) {
            toast.error("System error during upload");
        } finally {
            setUploading(false);
        }
    };

    const isImage = file?.type.startsWith('image/');
    const isVideo = file?.type.startsWith('video/');

    return (
        <div className="space-y-6 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/20">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-lime-50 rounded-lg text-lime-600">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 tracking-tight">{label}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">
                            {description || (allowAllFormats ? "Universal Asset Processor" : "SEO Optimized Engine")}
                        </p>
                    </div>
                </div>
                {result && (
                    <div className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1.5">
                        <CheckCircle2 size={12} />
                        Sync Active
                    </div>
                )}
            </div>

            {!file ? (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 min-h-[160px] flex items-center justify-center ${isDragActive ? 'border-lime-400 bg-lime-50/50 scale-[1.02]' : 'border-slate-200 hover:border-slate-300 bg-slate-50/30'
                        }`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center">
                        <div className="size-12 bg-white border-2 border-slate-100 rounded-xl flex items-center justify-center mb-3 shadow-sm text-slate-400">
                            <Upload size={24} />
                        </div>
                        <p className="text-xs font-black text-slate-900 mb-1 uppercase tracking-tight">
                            {allowAllFormats ? "Drop asset here" : "Drop image here"}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {allowAllFormats ? "WebP + Multi-format support" : "WebP + Semantic Naming"}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center relative z-10 text-lime-400">
                            {isImage ? <ImageIcon size={24} /> : isVideo ? <FileVideo size={24} /> : <FileText size={24} />}
                        </div>
                        <div className="flex-1 min-w-0 relative z-10">
                            <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-0.5">Asset Selected</p>
                            <p className="text-sm font-bold truncate leading-none">{file.name}</p>
                        </div>
                        <button
                            onClick={() => setFile(null)}
                            className="relative z-10 size-8 flex items-center justify-center bg-white/10 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-white transition-all"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">SEO Filename</Label>
                            <Input
                                placeholder="e.g. spring-sale-2024"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value.toLowerCase().trim().replace(/ /g, '-').replace(/[^a-z0-9-]/g, ''))}
                                className="bg-white border-2 border-slate-100 rounded-xl py-5 font-bold text-slate-900 focus:ring-lime-400"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between pr-1">
                                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ALT Tag (10-120)</Label>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${altTag.length >= 10 ? 'text-emerald-500' : 'text-slate-300'}`}>
                                    {altTag.length}/120
                                </span>
                            </div>
                            <Input
                                placeholder="Describe the asset context..."
                                value={altTag}
                                onChange={(e) => setAltTag(e.target.value)}
                                className={`bg-white border-2 rounded-xl py-5 font-bold text-slate-900 focus:ring-lime-400 transition-colors ${altTag.length > 0 && altTag.length < 10 ? 'border-rose-200' : 'border-slate-100'
                                    }`}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={handleUpload}
                        disabled={uploading || altTag.length < 10 || !fileName}
                        className="w-full h-12 bg-slate-900 text-white font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 disabled:opacity-50"
                    >
                        {uploading ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={18} />
                                Neural Optimization...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2 text-lime-400" size={18} />
                                Start SEO Pipeline
                            </>
                        )}
                    </Button>
                </div>
            )}

            {result && (
                <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Optimized Size</p>
                            <p className="text-xl font-black text-slate-900">{result.size_kb} KB</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Extension</p>
                            <p className="text-xl font-black text-lime-600 uppercase">WEBP</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Endpoint</p>
                            <p className="text-[11px] font-bold text-slate-900 bg-white border border-slate-100 p-2 rounded-lg break-all font-mono">
                                {result.file_path}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
