import { useState } from "react";
import "./Trampos.css";

const trampos = [
  {
    id: "Q426MB8AtP4",
    tipo: "REEDIT",
    titulo: "Shaman - Tente Escapar",
    subtitulo: "Chainsaw Man",
  },
  {
    id: "bPlCiG3YC_E",
    tipo: "REEDIT",
    titulo: "M4rkim - Lua Superior Três",
    subtitulo: "Akaza",
  },
  {
    id: "Ive76gEdBNE",
    tipo: "REEDIT",
    titulo: "Kenjaku - Corpo Morto",
    subtitulo: "Jujutsu Kaisen",
  },
  {
    id: "Pha16h4CNdU",
    tipo: "REEDIT",
    titulo: "Kenjaku - Corpo Morto",
    subtitulo: "Jujutsu Kaisen",
  },
  {
    id: "ENZ_B5xFR8Y",
    tipo: "REEDIT",
    titulo: "M4rkim - SANGUE HANMA",
    subtitulo: "Baki",
  },
  {
    id: "75l5LkTFLEQ",
    tipo: "COMISSÃO",
    titulo: 'DENJI RAP | "DANGEROUS"',
    subtitulo: "Crazy8theGreat x Tsuyo x Diggz Da Prophecy x Jamar Rose",
  },
  {
    id: "q2S1ACv1n2E",
    tipo: "COMISSÃO",
    titulo: "CT4 | Loucura em Dobro",
    subtitulo: "Joker Mask",
  },
  {
    id: "IT1uLFtR5wM",
    tipo: "COMISSÃO",
    titulo: "Blx | Sem Limitação",
    subtitulo: "Hakari Kinji",
  },
  {
    id: "aQeUQ3Sjy2I",
    tipo: "REEDIT",
    titulo: "M4rkim - ONE PUNCH",
    subtitulo: "Saitama",
  },
  {
    id: "8esGfsO2tBk",
    tipo: "REEDIT",
    titulo: "Shaman - Guerra",
    subtitulo: "Chainsaw Man",
  },
  {
    id: "B3cbKsharjM",
    tipo: "COMISSÃO",
    titulo: "Desotak - Vidas Perdidas",
    subtitulo: "Chainsaw Man feat. @bysallye",
  },
];

function Trampos() {
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  return (
    <section className="trampos-section">

      <div className="trampos-header">
        <h2>MEUS TRAMPOS</h2>

        <p>
          Alguns dos projetos que desenvolvi através de edições,
          motion design e trabalhos para clientes.
        </p>
      </div>

      <div className="trampos-container">

        <div className="trampos-grid">

          {trampos.map((trampo) => (
            <article
              className="trampo-card"
              key={trampo.id}
              onClick={() => setVideoSelecionado(trampo)}
            >

              <div className="thumbnail-container">

                <img
                  src={`https://img.youtube.com/vi/${trampo.id}/maxresdefault.jpg`}
                  alt={trampo.titulo}
                  className="trampo-thumbnail"
                />

                <div className="thumbnail-overlay">
                  <div className="play-button">
                    ▶
                  </div>
                </div>

                <span className="trampo-tipo">
                  {trampo.tipo}
                </span>

              </div>

              <div className="trampo-info">

                <h3>
                  {trampo.titulo}
                </h3>

                <p>
                  {trampo.subtitulo}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>

      {videoSelecionado && (

        <div
          className="video-modal"
          onClick={() => setVideoSelecionado(null)}
        >

          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="fechar-modal"
              onClick={() => setVideoSelecionado(null)}
            >
              ×
            </button>

            <div className="video-wrapper">

              <iframe
                src={`https://www.youtube.com/embed/${videoSelecionado.id}`}
                title={videoSelecionado.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

            <div className="modal-info">

              <span>
                {videoSelecionado.tipo}
              </span>

              <h3>
                {videoSelecionado.titulo}
              </h3>

              <p>
                {videoSelecionado.subtitulo}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Trampos;