import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Pédagogique et Accessible',
        Svg: require('@site/static/img/logo.svg').default, // Illustration éducative
        description: (
            <>
                KASM est conçu pour rendre la programmation bas niveau accessible à tous.
                Apprenez l'assembleur de manière intuitive et progressive.
            </>
        ),
    },
    {
        title: 'Exploration du Matériel',
        Svg: require('@site/static/img/logo.svg').default, // Illustration de circuit
        description: (
            <>
                Plongez dans les rouages du matériel informatique. KASM vous permet
                d'explorer les registres, la mémoire et les instructions bas niveau.
            </>
        ),
    },
    {
        title: 'Open Source et Communautaire',
        Svg: require('@site/static/img/logo.svg').default, // Illustration collaborative
        description: (
            <>
                KASM est un projet open source, soutenu par une communauté passionnée.
                Contribuez, apprenez et partagez vos découvertes !
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}