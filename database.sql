CREATE DATABASE isoaudit;

CREATE TABLE company(
    id SERIAL PRIMARY KEY,
    company_name VARCHAR (255),
    iso_standard VARCHAR (255),
    audit_date DATE,
    client_number VARCHAR (255)
);