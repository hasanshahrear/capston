import { PageLoader } from "@/features/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export function PageGuard({ children }: PropsWithChildren) {
  const { status } = useSession();

  const { push } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("auth/login");
    }
  }, [status, push]);

  return (
    <PageLoader loading={status !== "authenticated"}>{children}</PageLoader>
  );
}
