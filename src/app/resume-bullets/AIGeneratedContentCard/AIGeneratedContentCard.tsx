import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { CardDescription, CardFooter } from '@/components/ui/card';

type Props = {};

const AIGeneratedContentCard = (props: Props) => {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>AI Generated Resume Content</CardTitle>
                <CardDescription>
                    Copy the content to add it to your resume
                </CardDescription>
                {/* <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction> */}
            </CardHeader>
            <CardContent>
                <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
                    <p>
                        These terms govern your use of the workspace, including
                        access to shared documents, project files, and
                        collaboration tools.
                    </p>
                    <p>
                        You are responsible for the content you upload and for
                        ensuring that your team has the appropriate permissions
                        to view or edit it.
                    </p>
                    <p>
                        We may update features or limits as the service evolves.
                        When those changes materially affect your workflow, we
                        will notify your workspace administrators.
                    </p>
                    <p>
                        By continuing, you agree to keep your account
                        credentials secure and to follow your
                        organization&apos;s acceptable use policies.
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Copy To Clipboard
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AIGeneratedContentCard;
