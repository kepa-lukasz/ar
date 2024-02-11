import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

import Camera from "./camera";

export default function Resources() {

    function useIntersectionObserver(elementRef) {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            });

            if (elementRef.current) {
                observer.observe(elementRef.current);
            }

            return () => {
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            };
        }, [elementRef]);

        return isVisible;
    };

    const ref = useRef();


    const first = useRef()
    const second = useRef()
    const third = useRef()
    const isVisible1 = useIntersectionObserver(first);
    const isVisible2 = useIntersectionObserver(second);
    const isVisible3 = useIntersectionObserver(third);

    

    return (
        <div className="p-0 m-0 resources-container" >
            <div className="intro px-2 px-md-5">


                <h2>Poniżej jest kilka krótkich filmów, zanim je obejrzysz, proszę upewnij się, czy kamera działa prawidłowo</h2>
                <p>Jeśli jesteś w stanie, proszę zdejmij okulary i ustaw się tak, by w podglądzie kamry było widać twoją twarz i tekst wyśwwietlany pod nią
                    <br />
                    może to zająć kilkanaście sekund, ale warto zaczekać ;)
                </p>
                <Camera />
            </div>
            <div className="items-container bg-dark">

                <div className="item">
                    <div>

                        <p>1</p>
                        <img ref={first} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
                    </div>
                </div>
                <div className="item">
                    <div>


                        <p>2</p>
                        <img ref={second} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>3</p>

                        <img ref={third} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
                    </div>
                </div>

            </div>
        </div>
    )
}