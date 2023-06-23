import { Progress } from '@mantine/core';
import styles from './Footer.module.css';

function Footer() {
    return (<div className={styles.container}>
        <p style={{fontSize:"1.3rem"}}>© 2023 Ali Mirzaei</p>
        <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: "0 20px 7px 0" }}>completed</p>
            <Progress radius="xl" size="xl" label={"45%"} value={30} animate sx={{ width: "50vw" }} />
        </div>
    </div>);
}

export default Footer;