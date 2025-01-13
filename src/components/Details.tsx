import style from "./styles/details.module.css"
const Details = () => {
    return (
        <section className={style.details}>
            <div className={style.details_flex}>
                <div>
                    <h4><span className={style.red}>Guardians of Content: </span>Unveiling Media Player's Parental Power</h4>
                    <p>Enhance peace of mind with Media Player's Parental Controls. Customize family content access by
                        setting ratings and categories, ensuring a safe and enjoyable viewing experience. Media Player's
                        Parental Controls serve as your ally, providing confidence and control in the digital
                        landscape.</p>
                </div>
                <img src="/assets/guardians.png" alt="we are guardians of content"/>
            </div>
            <div className={style.details_grid}>
                <div className={style.details_grid_container}>
                    <div>
                        <h4 className={style.red}>Simple UI</h4>
                        <p>We provide a simple UI, but with best user experience</p>
                    </div>
                    <img src="/assets/simple-ui2-lX1iRgjh.png" alt="simple ui"/>
                </div>
                <div className={style.details_grid_container}>
                    <div>
                        <h4 className={style.red}>Multilingual</h4>
                        <p>You can select languages in movies and series</p>
                    </div>
                    <img src="/assets/multilingual-CRE1wTMD.png" alt="multilingual ui"/>
                </div>
            </div>

            <div className={`${style.details_flex} ${style.reverse}`}>
                <div>
                    <h4><span className={style.red}>Streaming Confidence:</span>Media Player's Unwavering Reliability</h4>
                    <p>Trust in the seamless reliability of Media Player services. We prioritize stability, ensuring uninterrupted streaming experiences that grant you consistent access to your favorite content. With reliability at the core, enjoy a viewing journey free from disruptions and full of uninterrupted entertainment.</p>
                </div>
                <img src="/assets/streaming-confidence-B7EePRcj.png" alt="streaming confidence"/>
            </div>

            <div className={style.details_last}>
                <div>
                    <h4 className={style.red}>It's a great day to Discover</h4>
                    <p>This service is your one-stop shop for entertainment. Binge Netflix originals, develop Prime Video hits, and catch the electrifying buzz of live streams - all in one click. From blockbuster movies to nail-biting sports, it's a smorgasbord of endless variety, ready to ignite your screen time.</p>
                </div>
                <div className={style.details_last_img}>
                    <img src="/assets/ibo-tv-mockup-CpDJQBsu.png" alt="ibo tv mockup"/>
                </div>
            </div>
        </section>
    );
};

export default Details;