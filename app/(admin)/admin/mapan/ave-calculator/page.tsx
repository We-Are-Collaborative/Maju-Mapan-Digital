'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Zap, ArrowRight, Gauge, Info, Users, DollarSign } from "lucide-react";

export default function AveCalculatorPage() {
    return (
        <div className="min-h-screen p-8 w-full mx-auto animate-in fade-in duration-700">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white border-4 border-slate-100">

                {/* Left Panel: Controls */}
                <div className="lg:col-span-3 p-12 bg-white">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-lime-100 text-lime-600 rounded-2xl">
                            <Calculator size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Value Engine</h1>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">AVE Calculator v2.0</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Label className="text-xs uppercase font-black text-slate-400 tracking-wider pl-1">Financial Data</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1 group">
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-lime-500 transition-colors" size={16} />
                                        <Input type="number" placeholder="0.00" className="pl-10 h-14 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-lime-200 focus:ring-4 focus:ring-lime-50 transition-all font-bold text-lg" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 pl-2">Base Media Cost</p>
                                </div>
                                <div className="space-y-1 group">
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={16} />
                                        <Input type="number" placeholder="0" className="pl-10 h-14 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-sky-200 focus:ring-4 focus:ring-sky-50 transition-all font-bold text-lg" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 pl-2">Est. Reach</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center px-1">
                                <Label className="text-xs uppercase font-black text-slate-400 tracking-wider">Sentiment Multiplier</Label>
                                <span className="text-xs font-bold text-lime-600 bg-lime-100 px-2 py-0.5 rounded-lg">Neutral (1.0x)</span>
                            </div>
                            <div className="h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center px-6 relative">
                                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-400 via-amber-400 to-lime-500 opacity-20 w-1/2 rounded-l-xl"></div>
                                <input type="range" className="w-full relative z-10 accent-lime-600 cursor-pointer" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-slate-500">Tier / Authority</Label>
                                <select className="w-full h-12 rounded-xl border-2 border-slate-100 bg-slate-50 font-bold text-slate-600 text-sm px-4 outline-none focus:border-slate-300 appearance-none">
                                    <option>National (Tier 1)</option>
                                    <option>Regional (Tier 2)</option>
                                    <option>Local (Tier 3)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-slate-500">Content Depth</Label>
                                <Input type="number" placeholder="Words" className="h-12 rounded-xl border-2 border-slate-100 bg-slate-50 font-bold" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Result */}
                <div className="lg:col-span-2 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Zap size={200} />
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-6 opacity-60">
                            <Gauge size={16} />
                            <span className="text-xs font-bold uppercase tracking-[.2em]">Estimate</span>
                        </div>

                        <div className="space-y-2 relative z-10">
                            <span className="text-6xl font-black tracking-tighter text-lime-400">$0.00</span>
                            <p className="text-white/60 font-medium leading-relaxed text-sm">
                                Calculated Advertising Value Equivalent based on current market rates and multipliers.
                            </p>
                        </div>
                    </div>

                    <Button className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-black h-16 rounded-2xl text-lg flex items-center justify-between px-6 group transition-all mt-8">
                        <span>Calculate Value</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

