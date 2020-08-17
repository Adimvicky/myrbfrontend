import React from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CoinRatesBar from '../../components/CoinRatesBar/CoinRatesBar';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import Footer from '../../components/Footer';
import CryptoTable from '../../components/CryptoTable/CryptoTable';
import analyticsImg from '../../assets/img/graph.svg';
import groupImg from '../../assets/img/group.svg';
import hourglassImg from '../../assets/img/hourglass.svg';
import { features } from './home.module.css';
import image from '../../assets/img/image.jpg'

const home = () => (
  <Layout>
    <Header />
    <CoinRatesBar />
    <Hero />
    <section className={`${features} px-20 py-12 flex items-center justify-between`}>
      <Feature img={analyticsImg}>
        The quick, brown fox jumps over a lazy dog. DJs flock by when.
      </Feature>
      <Feature img={groupImg} className={`b-l`}>
        The quick, brown fox jumps over a lazy dog. DJs flock by when.
      </Feature>
      <Feature img={hourglassImg} className={`b-l`}>
        The quick, brown fox jumps over a lazy dog. DJs flock by when.
      </Feature>
    </section>
    <section className={`px-20 my-24 flex items-center justify-between`}>
      <PhotoCard img={image} className="custom-bg-dark">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
      </PhotoCard>
      <PhotoCard img={image} className="custom-bg-red">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
      </PhotoCard>
      <PhotoCard img={image} className="custom-bg-purple">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
      </PhotoCard>
    </section>
    <section>
      <div className="px-20">
        <CryptoTable />
      </div>

    </section>

    <Footer />
  </Layout>
)

export default home;