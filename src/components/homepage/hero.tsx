export default function Hero() {
    return (
        <section className="relative">
            {/*video*/}
            <video autoPlay={true} loop muted className="hero-video">
                <source src="/public/dream-video.mp4" type="video/mp4"/>
            </video>

            <div className="md:absolute bg-gradient-to-t from-primary to-transparent top-0 left-0 w-full h-full"></div>

            {/*text*/}
            <div className="px-5 py-10 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:space-y-5">
                <h1 className="text-2xl mb-5 lg:text-6xl font-bold text-orange">About wall print</h1>
                <div className="md:text-white md:text-lg">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        </section>
    )
}