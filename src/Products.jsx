import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';

export default function Products() {
    const { t } = useTranslation();
    const products = t('products.items', { returnObjects: true });
    const categoriesData = t('products.categories', { returnObjects: true });

    const categories = [
        { id: 'workflow-automations', title: categoriesData['workflow-automations'] },
        { id: 'digital', title: categoriesData.digital },
        { id: 'microservices', title: categoriesData.microservices },
        { id: 'apps', title: categoriesData.apps }
    ];

    return (
        <section id="productos" className="products">
            <h2 className="section-title">{t('products.title')}</h2>
            <p className="section-subtitle">{t('products.subtitle')}</p>

            {categories.map((cat) => (
                <div className="product-category" style={{ marginBottom: '4rem' }} key={cat.id}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>{cat.title}</h3>
                    <div className="products-container" id={`products-${cat.id}`}>
                        {Array.isArray(products) && products
                            .filter((p) => (p.category || 'digital') === cat.id)
                            .map((product, idx) => (
                                <AnimateOnScroll key={idx} className={product.type === 'featured' ? 'product-featured' : 'coming-soon'}>
                                    {product.type === 'featured' ? (
                                        <>
                                            <div className="product-header">
                                                <div className="product-logo">
                                                    <div className="sellvera-icon">{product.icon}</div>
                                                    <h3>{product.title}</h3>
                                                </div>
                                                {product.badge && <div className="product-badge">{product.badge}</div>}
                                            </div>
                                            <div className="product-content">
                                                <h4>{product.subtitle}</h4>
                                                <p>{product.description}</p>
                                                {product.features && product.features.length > 0 && (
                                                    <div className="product-features">
                                                        {product.features.map((f, i) => (
                                                            <div className="feature" key={i}>
                                                                <span className="feature-icon">{f.icon}</span>
                                                                <div>
                                                                    <h5>{f.title}</h5>
                                                                    <p>{f.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="product-actions">
                                                    {product.primaryAction && <a href={product.primaryAction.link} className="btn btn-primary">{product.primaryAction.text}</a>}
                                                    {product.secondaryAction && <a href={product.secondaryAction.link} className="btn btn-secondary">{product.secondaryAction.text}</a>}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="coming-soon-content">
                                            <div className="coming-icon">{product.icon}</div>
                                            <h3>{product.title}</h3>
                                            <p>{product.description}</p>
                                            {product.action && (
                                                <div className="notify-btn">
                                                    <a href={product.action.link} className="btn btn-secondary">{product.action.text}</a>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </AnimateOnScroll>
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
}