import React from 'react';

import './client.css'

const Client = () => {
    return (
        <section className="client">
            <div className="container">
                <div className="client__content">
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">10</h1>
                        <p className="client__text">Работадателей</p>
                    </div>
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">400</h1>
                        <p className="client__text">Счастливых клиентов</p>
                    </div>
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">20</h1>
                        <p className="client__text">Вакансий</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;