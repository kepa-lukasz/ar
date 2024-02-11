import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        console.log("1", isVisible1)

        console.log("2", isVisible2)

        console.log("3", isVisible3)
    }, [isVisible1, isVisible2, isVisible3])

    return (
        <div className="p-0 m-0 bg-danger resources-container" >
            <div className="intro">

                <h1>Sprawdź czy masz w sobie choć trochę czarnego humoru</h1>
                <h2>Poniżej jest kilka krótkich filmów, zanim je obejrzysz, proszę upewnij się, czy kamera działa prawidłowo</h2>
                <p>Jeśli jesteś w stanie, proszę zdejmij okulary i ustaw się tak, by w podglądzie kamry było widać twoją twarz i tekst wyśwwietlany pod nią
                    <br/>
                    może to zająć kilkanaście sekund, ale warto zaczekać ;)
                </p>
                </div>

            <div className="item">

                <p>1</p>
                <img ref={first} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>2</p>
                <img ref={second} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>3</p>
                <img ref={third} src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>4</p>
                <img src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>5</p>
                <img src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>6</p>
                <img src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
            <div className="item">

                <p>7</p>
                <img src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div><div className="item">

                <p>8</p>
                <img src="https://kakadu.pl/blog/wp-content/uploads/2023/03/760x535px_1-2.jpg" />
            </div>
        </div>
    )
}