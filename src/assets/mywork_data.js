import project1_img from '../assets/project_1.svg';
import project2_img from '../assets/project_2.svg';
import project3_img from '../assets/project_3.svg';
import project4_img from '../assets/project_4.svg';
import project5_img from '../assets/project_5.svg';
import project6_img from '../assets/project_6.svg';
import project7_img from '../assets/project_7.svg';
import project8_img from '../assets/project_8.svg';

const mywork_data = [
  {
    w_no: 1,
    w_name: "Deep Learning-Based On-site EEWS Framework for Estimating Acceleration Response Spectra",
    w_img: [project1_img, project2_img],
    w_time: "2024-2025",
    w_desc: "The main goal of this research is to estimate acceleration response spectra, which is a measure of how buildings react to earthquakes, using as little input data as possible. This is important because the parameters typically needed for this estimation vary between regions and often require specific local equations. In this project, I proposed a method that uses a spectrogram generated from the first 3 seconds after the arrival of the initial earthquake wave and trained it using a variational autoencoder.",
    w_role: "Programmer",
    w_cont: [
            "Designed the data preprocessing pipeline to extract spectrogram features from 3-second seismic waveforms.",
            "Built and trained a variational autoencoder model using TensorFlow/Keras.",
            "Evaluated the model performance against real seismic datasets to validate accuracy.",
            "Documented findings and code in a GitHub repository for reproducibility."
          ],
    w_link: "https://github.com/padleh/EEWS-SpectrogramVAE-SAT"
  },
  {
    w_no: 2,
    w_name: "terTATa-LLM: From Tables and Text to Strategic Business Steps",
    w_img: [project3_img, project4_img],
    w_time: "2025",
    w_desc: "This project was done as a submission for Datathon 2025 held by RISTEK Fasilkom UI with a team of 3. We developed a financial AI assistant using LLMs with step-wise reasoning to help SMEs interpret tabular and textual data, deployed via a Hugging Face interface. This project ranked 10th in the preliminary round",
    w_role: "Programmer",
    w_cont: [
            "Preprocessed the TAT-QA dataset into JSONL format with multi-step reasoning instructions.",
            "Fine-tuned Nous-Hermes-2-Mistral-7B-DPO using LoRA and 4-bit quantization for efficient deployment.",
            "Built an interactive Gradio interface allowing users to upload Excel files and receive strategic recommendations with reasoning traces.",
            "Evaluated model performance using F1 score across various evaluation schemes, achieving 46.62 on full test data."
          ],
    w_link: "https://huggingface.co/spaces/BarudakLearning/terTATa"
  },
  {
    w_no: 3,
    w_name: "Cloud-Based PACS & AI Integration for Imaging Quality Assessment of Chest X-Ray Imaging",
    w_img: [project5_img, project6_img],
    w_time: "2024",
    w_desc: "This project was conducted for Bangkit 2024 Company Capstone Project in collaboration with Kalbe Farma with a team of 6. We developed an AI-powered system to assess chest X-ray image quality using deep learning techniques like CLAHE and Grad-CAM, and integrated it into a cloud-based PACS to support radiologist workflows.",
    w_role: "Team Leader, Machine Learning Engineer",
    w_cont: [
            "Built a CNN-based model enhanced with CLAHE preprocessing to detect underexposed or improperly positioned chest X-rays.",
            "Implemented Grad-CAM to provide visual interpretability and highlight areas influencing model predictions.",
            "Integrated the quality-assessment model into a cloud-based PACS for seamless radiologist access and diagnosis support.",
            "Created an automated pipeline for uploading, analyzing, and enhancing X-ray images with feedback display in OHIF viewer.",
            "Collaborated in a team of 6 to document system architecture and optimize deployment for clinical usability."
          ],
    w_link: "https://github.com/Kalbe-x-Bangkit/C24-DA-Kalbe-Bangkit?tab=readme-ov-file"
  },
  {
    w_no: 4,
    w_name: "Industrial Safety System with Earthquake Detection using Arduino",
    w_img: [project7_img, project8_img],
    w_time: "2023",
    w_desc: "This project was done as a final exam for Embedded System Work class with a group of 3. We Developed a microcontroller-based safety system to monitor industrial hazards including access security, fire hazard, and earthquake detection using Arduino, temperature/humidity sensors, and vibration modules.",
    w_role: "Programmer, Hardware Integrator",
    w_cont: [
        "Implemented a password-protected entry system using Arduino Nano, servo motors, and buzzer alerts.",
        "Integrated DHT11 sensor and LCD I2C to display temperature and humidity, triggering fan and buzzer under high heat conditions.",
        "Calibrated the SW-420 vibration sensor to detect earthquakes and display severity in SR scale using ADC conversion.",
        "Built a complete alert and display system with buzzer and LCD feedback for evacuation and anomaly warnings."
      ],
    w_link: "https://github.com/padleh"
  }
];

export default mywork_data; 