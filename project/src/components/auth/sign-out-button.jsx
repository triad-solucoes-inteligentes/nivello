import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOutButton({ className, label = "Sair" }) {
    return (
        <form
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
            }}
        >
            <Button type="submit" variant="outline" className={className}>
                {label}
            </Button>
        </form>
    );
}
