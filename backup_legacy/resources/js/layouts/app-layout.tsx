import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import {
    Award,
    BookOpen,
    BoxIcon,
    Briefcase,
    BriefcaseBusiness,
    Building2,
    ChevronDown,
    FileText,
    Folder,
    LayoutDashboard,
    LogOut,
    MailCheck,
    FileText as PageIcon,
    Settings,
    Star,
    User2,
    Users,
    Workflow,
} from 'lucide-react';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const AppLayout = (props: PropsWithChildren) => {
    const data = {
        navMain: [
            {
                title: 'Dashboard',
                url: route('dashboard.index'),
                icon: LayoutDashboard,
            },
            {
                title: 'Content',
                icon: BookOpen,
                items: [
                    {
                        title: 'Articles',
                        url: route('master.article.index'),
                        icon: FileText,
                    },
                    {
                        title: 'Categories',
                        url: route('master.category.index'),
                        icon: BoxIcon,
                    },
                    {
                        title: 'Pages',
                        url: route('master.page.index'),
                        icon: PageIcon,
                    },
                    {
                        title: 'Library',
                        url: route('master.library.index'),
                        icon: Folder,
                    },
                ],
            },
            {
                title: 'Portfolio',
                icon: BriefcaseBusiness,
                items: [
                    {
                        title: 'Clients',
                        url: route('master.client.index'),
                        icon: User2,
                    },
                    {
                        title: 'Showcases',
                        url: route('master.showcase.index'),
                        icon: BriefcaseBusiness,
                    },
                    {
                        title: 'Stakeholders',
                        url: route('master.stakeholder.index'),
                        icon: Users,
                    },
                ],
            },
            {
                title: 'Company',
                icon: Building2,
                items: [
                    {
                        title: 'Specialities',
                        url: route('master.speciality.index'),
                        icon: Star,
                    },
                    {
                        title: 'Values',
                        url: route('master.value.index'),
                        icon: Award,
                    },
                ],
            },
            {
                title: 'Operations',
                icon: Workflow,
                items: [
                    {
                        title: 'Careers',
                        url: route('operational.career.index'),
                        icon: Briefcase,
                    },
                    {
                        title: 'Inquiries',
                        url: route('operational.inquiry.index'),
                        icon: MailCheck,
                    },
                ],
            },
            {
                title: 'Settings',
                url: route('setting.index'),
                icon: Settings,
            },
        ],
    };

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="/">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Building2 className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 leading-none">
                                        <span className="font-semibold">Laratail Console</span>
                                        <span className="text-xs">Admin Dashboard</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {data.navMain.map((item) => (
                                    <React.Fragment key={item.title}>
                                        {item.items ? (
                                            <Collapsible defaultOpen className="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton className="w-full">
                                                            <item.icon className="size-4" />
                                                            <span>{item.title}</span>
                                                            <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {item.items.map((subItem) => (
                                                                <SidebarMenuSubItem key={subItem.title}>
                                                                    <SidebarMenuSubButton asChild>
                                                                        <a href={subItem.url}>
                                                                            <subItem.icon className="size-4" />
                                                                            <span>{subItem.title}</span>
                                                                        </a>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            ))}
                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                        ) : (
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <a href={item.url}>
                                                        <item.icon className="size-4" />
                                                        <span>{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        )}
                                    </React.Fragment>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Button variant="ghost" className="w-full justify-start">
                                    <LogOut className="size-4 text-red-500" />
                                    <span className="text-red-500">Logout</span>
                                </Button>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                </header>
                <div className="p-4">
                    <Toaster />
                    {props.children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};
