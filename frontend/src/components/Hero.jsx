const Hero = () => {
    return (
        <div className="text-center bg-cover bg-no-repeat bg-fixed py-24 px-40" style={{ backgroundImage: `url('path-to-background-image.jpg')` }}>
            <div className="font-extrabold text-5xl uppercase">
                Solution that Inspire, Products that Delievers.
            </div>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged.
            </div>
        </div>
    );
};

export default Hero