// ini adalah halaman yang berisi AboutPage

import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, nama saya Rafi. Saya adalah Web Developer Beginner.</p>

            <p>Saya mempunyai mimpi untuk menjadi seorang Full Stack Web Developer.</p>

            <p>Saya konstan belajar, untuk menggapai mimpi itu. Tidak mudah memang, namun tekad saya kuat dan pasti akan terwujud</p>

            <p>Saya adalah seorang mahasiswa semester 2, di Perguruan Tinggi Swasta di Jakarta.</p>

            <p>Belajar Web Programming tidaklah mudah, banyak kendala yang harus saya hadapi. Mulai dari error, hingga materi yang tidak kunjung paham. Namun hal itu membuat saya tidak menyerah dan membuat semangat saya bertambah besar.</p>

            <p>Motto saya dalah "Jangan pernah berhenti belajar, karena sehebat-hebatnya anda masih ada orang yang lebih baik di luar sana"</p>

            </Content>
        </div>
    );

}

export default AboutPage;