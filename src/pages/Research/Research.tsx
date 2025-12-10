import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Beaker, 
  Atom, 
  Sun, 
  Heart,
  FlaskConical,
  Zap,
  Microscope,
  TestTube
} from 'lucide-react';
import './Research.scss';

const papers = [
  {
    number: '01',
    title: 'Organometallic Complexes: Synthesis and Characterization',
    field: 'Organometallic Chemistry',
    summary: 'This research focused on the synthesis of novel organometallic complexes featuring transition metals coordinated with organic ligands. We developed new synthetic routes for preparing air-stable complexes with unique electronic properties. The work involved extensive characterization using NMR spectroscopy, X-ray crystallography, and electrochemical methods, establishing structure-property relationships that guide rational design of functional materials.',
    highlights: ['Novel Synthesis Routes', 'X-ray Crystallography', 'Electrochemistry', 'Structure Analysis']
  },
  {
    number: '02',
    title: 'Catalytic Systems: Activity and Selectivity Studies',
    field: 'Catalysis',
    summary: 'Investigated the catalytic behavior of metal complexes in organic transformations, with particular focus on understanding the factors that control activity and selectivity. Through systematic variation of ligand structures and reaction conditions, we identified key parameters governing catalytic performance. Kinetic studies and mechanistic investigations revealed intermediate species and rate-determining steps, enabling optimization of catalytic systems for practical applications.',
    highlights: ['Kinetic Studies', 'Mechanism Elucidation', 'Selectivity Control', 'Process Optimization']
  },
  {
    number: '03',
    title: 'Photochemical Processes: Light-Induced Reactivity',
    field: 'Photochemistry',
    summary: 'Explored the photophysical and photochemical properties of metal complexes, investigating how light absorption triggers chemical transformations. Using time-resolved spectroscopy and computational methods, we characterized excited states and mapped out photochemical pathways. This work contributed to understanding energy transfer processes and developing light-activated systems for potential applications in solar energy conversion and photodynamic therapy.',
    highlights: ['Time-Resolved Spectroscopy', 'Excited States', 'Energy Transfer', 'Solar Applications']
  },
  {
    number: '04',
    title: 'Bioinorganic Activity: Biological Applications of Metal Complexes',
    field: 'Bioinorganic Chemistry',
    summary: 'Examined the interactions of metal complexes with biological systems, evaluating their potential as therapeutic agents or biological probes. Studies included binding affinity measurements with biomolecules, cellular uptake studies, and assessment of biological activity. The interdisciplinary nature of this work combined inorganic chemistry with biochemistry and cell biology, opening pathways toward new diagnostic and therapeutic tools.',
    highlights: ['Biomolecule Binding', 'Cellular Studies', 'Therapeutic Potential', 'Interdisciplinary']
  }
];

const expertiseAreas = [
  {
    icon: FlaskConical,
    title: 'Synthesis',
    description: 'Complex molecular synthesis and purification'
  },
  {
    icon: Zap,
    title: 'Electrochemistry',
    description: 'Redox properties and electron transfer'
  },
  {
    icon: Sun,
    title: 'Photochemistry',
    description: 'Light-matter interactions and excited states'
  },
  {
    icon: Microscope,
    title: 'Spectroscopy',
    description: 'Advanced characterization techniques'
  }
];

const Research: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="research">
      <section className="research__hero">
        <div className="research__hero-container">
          <span className="research__hero-tag">Research Background</span>
          <h1 className="research__hero-title">
            <span className={gradientClass}>Academic Research</span>
          </h1>
          <p className="research__hero-subtitle">
            My doctoral research in chemistry provided the foundation for my deep understanding 
            of scientific data and research workflows.
          </p>
        </div>
      </section>

      <section className="research__papers">
        <div className="research__papers-container">
          <div className="research__papers-intro">
            <h2 className="research__papers-intro-title">Published Research</h2>
            <p className="research__papers-intro-text">
              My PhD thesis comprised four distinct research projects, each resulting in peer-reviewed 
              publications. Below are accessible summaries of this work, demonstrating the breadth 
              and depth of my scientific background.
            </p>
          </div>

          <div className="research__papers-grid">
            {papers.map((paper, index) => (
              <article className="research__paper" key={index}>
                <div className="research__paper-number">{paper.number}</div>
                <div className="research__paper-content">
                  <h3 className="research__paper-title">{paper.title}</h3>
                  <span className="research__paper-field">
                    <Beaker />
                    {paper.field}
                  </span>
                  <p className="research__paper-summary">{paper.summary}</p>
                  <div className="research__paper-highlights">
                    {paper.highlights.map((highlight, hIndex) => (
                      <span className="research__paper-highlight" key={hIndex}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research__expertise">
        <div className="research__expertise-header">
          <span className="research__expertise-tag">Expertise Areas</span>
          <h2 className="research__expertise-title">Core Scientific Competencies</h2>
        </div>
        <div className="research__expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div className="research__expertise-card" key={index}>
              <div className="research__expertise-card-icon">
                <area.icon />
              </div>
              <h3 className="research__expertise-card-title">{area.title}</h3>
              <p className="research__expertise-card-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Research;
