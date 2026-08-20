import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import UserInputCard from './UserInputCard/UserInputCard';
import AIGeneratedContentCard from './AIGeneratedContentCard/AIGeneratedContentCard';

type Props = {};

export function SpinnerButton() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Button variant="outline" disabled size="sm">
                <Spinner data-icon="inline-start" />
                Generating
            </Button>
        </div>
    );
}

const page = (props: Props) => {
    return (
        <div className="flex flex-row w-full justify-evenly">
            <div className="flex w-full max-w-md">
                <UserInputCard />
            </div>
            <div className="flex flex-col justify-center items-center">
                <SpinnerButton />
            </div>
            <div className="flex w-full max-w-md">
                <AIGeneratedContentCard />
            </div>
        </div>
    );
};

export default page;
