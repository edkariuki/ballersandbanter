export default function AboutIntro() {
    return (
        <>
            <section className="min-h-screen snap-start flex items-center px-8 pt-24 md:px-20 md:pt-0 bg-[#0a0a1e] text-white">
                <div className="max-w-6xl">

                    <h1 className="font-archivo-black text-7xl md:text-9xl uppercase tracking-tighter leading-none">
                        About
                        <span className="block text-cyan-400">
                            Us
                        </span>
                    </h1>

                    <p className="mt-10 max-w-5xl text-gray-400 text-xl md:text-2xl leading-relaxed">
                        We met as FC players and teamed up to play pro clubs together. We eventually played other games together like Call of Duty Warzone and GTA Online. We realized we had a lot of fun playing together and this could be more than just playing for fun.

                        There are a lot of very good gamers around and we wanted to create a setup where we could compete among the best. The idea grew into creating a community that could bring together passionate individuals and teams that would compete in popular game titles like EA FC, Call of Duty, Valorant, Fortnite, and many more.

                        BallersandBanter was created to organize competitive gaming tournaments and events for players and teams to prove their skills, win prizes and have fun.
                    </p>

                </div>
            </section>

            <section className="h-screen snap-start flex items-center justify-center bg-[#0a0a1e] text-white">

                <h2 className="font-archivo-black text-7xl md:text-[12rem] uppercase tracking-tighter leading-[0.85] text-center">
                    Meet
                    <span className="block text-cyan-400">
                        The Team
                    </span>
                </h2>
                {/* <p> We met as FC players and the team will be introduced by how we play.</p> */}

            </section>
        </>
    );
}