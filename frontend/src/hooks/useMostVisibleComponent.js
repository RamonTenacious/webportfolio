import { useEffect, useState } from "react";

export const useMostVisibleComponent = (componentArray, options) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        if (!componentArray || componentArray.length === 0 || !options) return;

        const filteredSections = Array.from(componentArray).filter(section =>
            options.some(opt => opt.target === section.id)
        );

        if (filteredSections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100)
            }
        );

        filteredSections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [componentArray, options]);

    return activeSection;
};