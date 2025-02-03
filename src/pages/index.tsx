import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Illustrations (ajoutez ces fichiers dans `static/img`)
import CodeIllustration from '@site/static/img/code-illustration.svg';
import KasmLogo from '@site/static/img/logo.svg';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className={styles.heroContent}>
                    <KasmLogo className={styles.heroLogo} />
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Commencer avec KASM 🚀
                        </Link>
                        <Link
                            className="button button--outline button--lg"
                            to="/docs/instructions">
                            Voir les Instructions
                        </Link>
                    </div>
                </div>
                <CodeIllustration className={styles.heroIllustration} />
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Bienvenue sur ${siteConfig.title}`}
            description="KASM est un compilateur éducatif pour explorer la programmation bas niveau. Apprenez l'assembleur de manière intuitive et amusante.">
            <HomepageHeader />
            <main>
                <section className={styles.featuresSection}>
                    <div className="container">
                        <h2 className={styles.featuresTitle}>Pourquoi choisir KASM ?</h2>
                        <HomepageFeatures />
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <div className="container">
                        <h2 className={styles.ctaTitle}>Prêt à explorer ?</h2>
                        <p className={styles.ctaDescription}>
                            Plongez dans le monde de la programmation bas niveau avec KASM. Que vous soyez débutant ou expert, KASM est conçu pour vous accompagner dans votre apprentissage.
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--primary button--lg"
                                to="/docs/intro">
                                Démarrer Maintenant 🚀
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}