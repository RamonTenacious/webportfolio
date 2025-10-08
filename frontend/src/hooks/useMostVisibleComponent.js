import { useEffect, useState } from "react";

export const useMostVisibleComponent = (componentArray, options) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        if (!componentArray || componentArray.length === 0 || !options) return;

        const filteredSections = Array.from(componentArray).filter(section =>
            options.some(opt => opt.target === section.id)
        );

        if (filteredSections.length === 0) return;

        const observer = new IntersectionObserver(entries => {
        let maxVisible = null;
        let maxWeight = 0;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const elementCenter = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
            const distanceFromCenter = Math.abs(window.innerHeight / 2 - elementCenter);
            const weight = entry.intersectionRatio * (1 - distanceFromCenter / (window.innerHeight / 2));
            if (weight > maxWeight) {
                maxWeight = weight;
                maxVisible = entry.target.id;
            }
            }
        });

        if (maxVisible) setActiveSection(maxVisible);
        }, { threshold: Array.from({ length: 101 }, (_, i) => i / 100) });

        filteredSections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [componentArray, options]);

    return activeSection;
};