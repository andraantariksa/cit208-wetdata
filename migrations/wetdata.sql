--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: environments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.environments (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    temperature integer NOT NULL,
    humidity integer NOT NULL,
    "soilMoisture" integer NOT NULL,
    rain boolean NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.environments OWNER TO postgres;

--
-- Name: environments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.environments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.environments_id_seq OWNER TO postgres;

--
-- Name: environments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.environments_id_seq OWNED BY public.environments.id;


--
-- Name: environments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.environments ALTER COLUMN id SET DEFAULT nextval('public.environments_id_seq'::regclass);

--
-- Name: environments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.environments_id_seq', 1, true);


--
-- Name: environments environment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.environments
    ADD CONSTRAINT environment_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

