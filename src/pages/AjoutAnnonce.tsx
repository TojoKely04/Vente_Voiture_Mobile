import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon , IonItem , IonLabel , IonInput , IonCheckbox, IonCard, IonRow, IonCol } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import Annonce from '../annonce/Annonce';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import {IonList } from '@ionic/react';
import {  IonSelect, IonSelectOption } from '@ionic/react';
import { IonBackButton, IonButtons} from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';
import axios from 'axios';

const Page: React.FC = () => {

    const token = localStorage.getItem("token");

    // État pour stocker les catégories récupérées depuis l'API
    const [categories, setCategories] = useState([]);
    const [marque,setMarque] = useState([]);
    const [moteur,setMoteur] = useState([]);
    const [vitesse , setVitesse] = useState([]);
    const [energie,setEnergie] = useState([]);
    // Fonction pour récupérer les catégories depuis l'API
    const fetchElements = async () => {
      try {
        const response = await axios.get('https://ventevoitureback-production.up.railway.app/categorie');
        setCategories(response.data);

        const r2 = await axios.get('https://ventevoitureback-production.up.railway.app/marque');
        setMarque(r2.data);

        const r3 = await axios.get('https://ventevoitureback-production.up.railway.app/moteur');
        setMoteur(r3.data);

        const r4 = await axios.get('https://ventevoitureback-production.up.railway.app/vitesse');
        setVitesse(r4.data);

        const r5 = await axios.get('https://ventevoitureback-production.up.railway.app/energie');
        setEnergie(r5.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    };

    // Effect pour appeler la fonction fetchElements au montage du composant
    useEffect(() => {
      fetchElements();
    }, []);


    const [formData, setFormData] = useState({
      nom: '',
      descriptions: '',
      categorie: {
        idCategorie: ''
      },
      marque: {
        idMarque: ''
      },
      couleur: '',
      moteur: {
        idMoteur: ''
      },
      anneeSortie: '',
      boiteVitesse: {
        idVitesse: ''
      },
      energie: {
        idEnergie: ''
      },
      prix: '',
      images: '',
      datePublication: '2023',
      kilometrage: ''
    });

    const handleInputChange = (event: any) => {
      const { id, value } = event.target;
      setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
      try {
        console.log(formData);
        const response = await axios.post('https://ventevoitureback-production.up.railway.app/annonces/'+token, formData);
        // Réinitialiser le formulaire après l'envoi réussi si nécessaire
        setFormData({
          nom: '',
          descriptions: '',
          categorie: {
            idCategorie: ''
          },
          marque: {
            idMarque: ''
          },
          couleur: '',
          moteur: {
            idMoteur: ''
          },
          anneeSortie: '',
          boiteVitesse: {
            idVitesse: ''
          },
          energie: {
            idEnergie: ''
          },
          prix: '',
          images: '',
          datePublication: '2023',
          kilometrage: ''
        });
      } catch (error) {
        console.error('Erreur lors de la soumission des données:', error);
      }
    };
  
    const handleCategoryChange = (event: any) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        categorie: {
          idCategorie: value
        }
      });
    };

    const handleMarqueChange = (event: any) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        marque: {
          idMarque: value
        }
      });
    };
    
    const handleMoteurChange = (event: any) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        moteur: {
          idMoteur: value
        }
      });
    };

    const handleVitesseChange = (event: any) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        boiteVitesse: {
          idVitesse: value
        }
      });
    };

    const handleEnergieChange = (event: any) => {
      const { value } = event.target;
      setFormData({
        ...formData,
        energie: {
          idEnergie: value
        }
      });
    };
  
  
  return (

    <IonPage>
      <Header title="Ajouter Annonce"/>
      <IonContent fullscreen className="ion-padding ion-text-center">
            <IonList>
            <IonItem>
              <IonInput label="Nom :" placeholder="Nom de la voiture" id="nom" value={formData.nom} onIonChange={handleInputChange} ></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Description :" type="text" id="descriptions" placeholder="Votre déscription" value={formData.descriptions} onIonChange={handleInputChange}></IonInput>
            </IonItem>

            
            <IonItem>
            <IonSelect label="Catégorie :" id="categorie" interface="popover" value={formData.categorie.idCategorie} onIonChange={handleCategoryChange}>
              {/* <IonSelect label="Catégorie :" id='categorie.idCategorie' interface="popover" value={formData.categorie.idCategorie} onIonChange={handleInputChange}> */}
                {categories.map((category) => (
                  <IonSelectOption value={category.idCategorie}>
                    {category.categorie}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            <IonItem>
            <IonSelect label="Marque :" interface="popover" id="marque" value={formData.marque.idMarque} onIonChange={handleMarqueChange}>
                  {marque.map((m) =>(
                    <IonSelectOption value={m.idMarque}>{m.marque}</IonSelectOption>
                  ))}
                </IonSelect>
            </IonItem>

            <IonItem>
            <IonSelect label="Couleur :" interface="popover" id="couleur" value={formData.couleur} onIonChange={handleInputChange}>
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
            <IonSelect label="Moteur :" interface="popover" id="moteur" value={formData.moteur.idMoteur} onIonChange={handleMoteurChange}>
                  {moteur.map((mo)=>(
                    <IonSelectOption value={mo.idMoteur}>{mo.moteur}</IonSelectOption>
                  ))}
                  
                  
                </IonSelect>
            </IonItem>

            <IonItem>
              <IonInput label="Kilometrage :" type="number" placeholder="Kilometrage de la voiture" id="kilometrage" value={formData.kilometrage} onIonChange={handleInputChange}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Année de sortie :" placeholder="Année de sortie" type="number" id="anneeSortie" value={formData.anneeSortie} onIonChange={handleInputChange}></IonInput>
            </IonItem>

            <IonItem>
            <IonSelect label="Vitesse :" interface="popover" id="vitesse" value={formData.boiteVitesse.idVitesse} onIonChange={handleVitesseChange}>
                    {vitesse.map((vi)=>(
                       <IonSelectOption value={vi.idVitesse}>{vi.vitesse}</IonSelectOption>
                    ))}
            </IonSelect>
            </IonItem> 
            
            <IonItem>
            <IonSelect label="Enérgie :" interface="popover" id="energie" value={formData.energie.idEnergie} onIonChange={handleEnergieChange}>     
                  {energie.map((e)=>(
                    <IonSelectOption value={e.idEnergie}>{e.energie}</IonSelectOption>
                  ))}
            </IonSelect>
            </IonItem>

            <IonItem>
              <IonInput label="Prix :" placeholder="Prix de vente" type="number" id="prix" value={formData.prix} onIonChange={handleInputChange}></IonInput>
            </IonItem>
      </IonList>   
      <IonRow>
        <IonCol>
            <IonButton expand="block" onClick={handleSubmit}>
                Ajouter
            </IonButton>
            </IonCol>
        </IonRow>


      </IonContent>
          
      </IonPage>
  )
};

export default Page;
