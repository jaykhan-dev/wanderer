import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Account from "../components/Account";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Wanderer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Wanderer</h1>
        <div>
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
