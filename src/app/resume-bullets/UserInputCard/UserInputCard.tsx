import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { CardDescription, CardFooter } from '@/components/ui/card';

type Props = {};

function UserInputCard(props: Props) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Your Resume Content</CardTitle>
                <CardDescription>
                    Enter your current experience to make it better
                </CardDescription>
                {/* <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction> */}
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Field>
                                <Textarea
                                    id="textarea-message"
                                    placeholder="Type your message here."
                                    rows={9}
                                    className="field-sizing-fixed"
                                />
                            </Field>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Make Better
                </Button>
            </CardFooter>
        </Card>
    );
}

export default UserInputCard;
