import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Languages & Libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React.JS</span>
            <span className="chip">JavaScript ( ES6+ )</span>
            <span className="chip">Python (Basic)</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">CSS</span>
            <span className="chip">HTML</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">SQL</span>

          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Tools & Technologies</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Query</span>
            <span className="chip">React Router</span>
            <span className="chip">SCSS</span>
            <span className="chip">Css Modules</span>
            <span className="chip">Styles Components</span>
            <span className="chip">Figma</span>
            <span className="chip">VS Code</span>
            <span className="chip">Vite</span>
            <span className="chip">JSON</span>
            <span className="chip">Axios</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
