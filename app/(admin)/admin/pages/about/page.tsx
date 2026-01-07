import { getPageContent, updatePageContent } from '@/app/actions/pages';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';

export default async function AdminAboutPage() {
    const content = await getPageContent('about-us') || {};

    async function handleSubmit(formData: FormData) {
        'use server';

        const data = {
            hero_title: formData.get('hero_title'),
            hero_subtitle: formData.get('hero_subtitle'),

            story_title: formData.get('story_title'),
            story_paragraph_1: formData.get('story_paragraph_1'),
            story_paragraph_2: formData.get('story_paragraph_2'),
            story_paragraph_3: formData.get('story_paragraph_3'),

            values_title: formData.get('values_title'),
            values_subtitle: formData.get('values_subtitle'),
            values_cta_text: formData.get('values_cta_text'),

            team_title: formData.get('team_title'),
            team_subtitle: formData.get('team_subtitle'),

            clients_title: formData.get('clients_title'),
            clients_subtitle: formData.get('clients_subtitle'),

            cta_title: formData.get('cta_title'),
            cta_description: formData.get('cta_description'),
            cta_button_text: formData.get('cta_button_text'),
        };

        await updatePageContent('about-us', data);
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">About Us Page Content</h1>
                    <p className="text-muted-foreground">
                        Manage text content for the About Us page.
                    </p>
                </div>
            </div>

            <form action={handleSubmit} className="space-y-8">
                {/* Hero Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Hero Section</CardTitle>
                        <CardDescription>Top banner content.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="hero_title">Hero Title</Label>
                            <Input id="hero_title" name="hero_title" defaultValue={content.hero_title} placeholder="We Create Digital Excellence" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="hero_subtitle">Hero Subtitle</Label>
                            <Textarea id="hero_subtitle" name="hero_subtitle" defaultValue={content.hero_subtitle} rows={3} />
                        </div>
                    </CardContent>
                </Card>

                {/* Our Story Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Our Story</CardTitle>
                        <CardDescription>The company history and mission.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="story_title">Section Title</Label>
                            <Input id="story_title" name="story_title" defaultValue={content.story_title} placeholder="The Story Behind Maju Mapan" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="story_paragraph_1">Paragraph 1</Label>
                            <Textarea id="story_paragraph_1" name="story_paragraph_1" defaultValue={content.story_paragraph_1} rows={4} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="story_paragraph_2">Paragraph 2</Label>
                            <Textarea id="story_paragraph_2" name="story_paragraph_2" defaultValue={content.story_paragraph_2} rows={4} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="story_paragraph_3">Paragraph 3</Label>
                            <Textarea id="story_paragraph_3" name="story_paragraph_3" defaultValue={content.story_paragraph_3} rows={4} />
                        </div>
                    </CardContent>
                </Card>

                {/* Values Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Values Section Config</CardTitle>
                        <CardDescription>Headings for the core values section.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="values_title">Values Title</Label>
                            <Input id="values_title" name="values_title" defaultValue={content.values_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="values_subtitle">Values Subtitle</Label>
                            <Textarea id="values_subtitle" name="values_subtitle" defaultValue={content.values_subtitle} rows={2} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="values_cta_text">Card CTA Text</Label>
                            <Input id="values_cta_text" name="values_cta_text" defaultValue={content.values_cta_text} placeholder="Learn More" />
                        </div>
                    </CardContent>
                </Card>

                {/* Team Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Team Section Config</CardTitle>
                        <CardDescription>Headings for the team section.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="team_title">Team Title</Label>
                            <Input id="team_title" name="team_title" defaultValue={content.team_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="team_subtitle">Team Subtitle</Label>
                            <Textarea id="team_subtitle" name="team_subtitle" defaultValue={content.team_subtitle} rows={2} />
                        </div>
                    </CardContent>
                </Card>

                {/* Clients Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Clients Section Config</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="clients_title">Clients Title</Label>
                            <Input id="clients_title" name="clients_title" defaultValue={content.clients_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="clients_subtitle">Clients Subtitle</Label>
                            <Textarea id="clients_subtitle" name="clients_subtitle" defaultValue={content.clients_subtitle} rows={2} />
                        </div>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Bottom CTA Section</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cta_title">CTA Title</Label>
                            <Input id="cta_title" name="cta_title" defaultValue={content.cta_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cta_description">CTA Description</Label>
                            <Textarea id="cta_description" name="cta_description" defaultValue={content.cta_description} rows={2} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cta_button_text">Button Text</Label>
                            <Input id="cta_button_text" name="cta_button_text" defaultValue={content.cta_button_text} />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end sticky bottom-6 z-10">
                    <Button type="submit" size="lg" className="shadow-xl"><Save className="mr-2 h-5 w-5" /> Save All Content</Button>
                </div>
            </form>
        </div>
    );
}
