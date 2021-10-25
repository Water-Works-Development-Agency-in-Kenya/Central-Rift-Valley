var config = {
    //style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/kainetkonanyun/ckv5a7mr8633v15npj2forvoq/draft',
    accessToken: 'pk.eyJ1Ijoia2FpbmV0a29uYW55dW4iLCJhIjoiY2t2NThncm90NHBoODJvczdydGtlMWN1ayJ9.Zqc8JUlqDx6zxiXhmjaIGA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Project in kenya.',
    subtitle: 'Under the Central Rift Valley Water Works Agency (CRVWWA)',
    byline: 'By Geoffrey Kirui, GIS For Water and Sanitation',
    footer: 'Source of content: https://www.crvwwda.go.ke/. Story Map by Geoffrey Kirui, the lead consultant at <a href="https://icongeospatial.odoo.com/">GIS For Water and Sanitation. This information was gathered from the intenet for the purpose of testing story maps with mapbox. GIS For Water and Sanitation is not liable for misrepresentation whatsoever.',
    chapters: [
        {
            id: '1',
            alignment: 'center',
            hidden: false,
            title: 'The CRVWWDA Family',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/CRVWWDA%20Family.jpg',
            description: ' The Central Rift Valley Water Works Development Agency (CRVWWDA) is one of the nine (9) Water Works Development Agencies in Kenya and was formed under Section 65 of the Water Act, 2016. It was established through Kenya Gazette Notice No. 4 dated 7thFebruary 2020. The region served by the Agency comprise of the five Counties of Nakuru, Narok, Laikipia, Baringo and Nyandarua.Led by the Chairman Bridg. (Rtd) Stephen Njunge Kihu EBS, with other Board of Directors and staff members at the Agency Headquaters.',
            location: {
                center: [37.91655, 0.12274],
                zoom: 5.46,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '1. Itare Dam Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'Itare Dam is one of the flagship projects that have been identified by the Government of Kenya that needs to be developed as a matter of priority. Further, in accordance with the policy of prioritizing development of sources that are most economic, the National Water Master Plan identified Itare to be developed as a priority. Through various studies, Itare Dam site was identified as the most viable long term source of water to address water shortages in Nakuru Municipality, Kuresoi, Molo, Njoro and Rongai areas. This site was chosen because it is located in area of greater water resources which can be developed to meet the ultimate demand. The dam will have a capacity to yield 100,000m3 /day. The executing agency is Rift Valley Water Works Development Agency is executing the project.',
            location: {
                center: [35.529324, -0.42975],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '2. Chemususu Dam Water Supply Project',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/Water%20Treatment%20Plant%20at%20Chemususu%20Dam.jpg',
            description: 'The project is at about 71% completion status. The civil works for the treatment work and gravity main to the main reservoir of capacity 5000m3 at Baringo high school is completed. Eldama Ravine town reticulation system is completed and was commissioned on 7th July, 2019. In addition to the Baringo hill tank, a 750m3 tank at the District Commissioner office compound (DC tank) and 11 No. tanks across the project area are completed while the construction of the other 15 No. tanks is in various stages of completion. The other major distribution mains are on-going. The source of the water is Chemususu Dam developed in phase I by National Water Conservation and Pipeline Corporation with a capacity of 11million cubic metres. The dam is located in Koibatek Sub County in Baringo County. The project targets water supply to Eldama Ravine town and its environs, Mogotio Town and its environs, Kabarak University, Kiamunyi area of Nakuru Town and parts of Rongai sub-counties.',
            location: {
                center: [35.79098, -0.07442],
                zoom: 12.57,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: '3. Lake Nakuru Biodiversity Conservation Project',
            //image: './path/to/image/source.png',
            description: 'This is a Five-year project to be financed by KfW bank and Government of Kenya to expand Njoro Waste Water Treatment Plant, expand sewer network and rehabilitate the water supply network',
            location: {
                center: [36.08344, -0.29899],
                zoom: 10.82,
                pitch: 58.00,
                bearing: -18.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: '4. Kirandich Dam Phase II Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'The contract commenced on 6th February 2017 and was supposed to end on 8th December 2018. There were delays in contractor mobilisation to site on time which necessitating contract duration rescheduling through an addendum. The addendum has been negotiated by parties and approved by the Italian Cooperation who is the financier of the project. The contract is, therefore, going to be rescheduled to be effective from 8th December 2018 to 6th December 2020. The project is currently at 12.5% completion.',
            location: {
                center: [35.78511, 0.49735],
                zoom: 14.38,
                pitch: 59.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '5. Naivasha Industrial Park Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'Six No. high yielding boreholes have been drilled in an identified well field in Naivasha (5No. near Delamere and the other is located at south lake area, Works contract: Development of Water Source capable of supplying 10,000m3/day, Conveyance and storage systems to the Special Economic Zone. Progress: Work on the pipeline ongoing and acquisition of land for tank sites ongoing, and it is at 70%. Malewa Dam Project would do the long-term solution of water supply for NIP.',
            location: {
                center: [36.43963, -0.70334],
                zoom: 9.70,
                pitch: 60.00,
                bearing: 16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: '6. Kaptumo Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'The scope of works involves laying of approximately 5Km of pipelines, construction of 2 No storage tanks, a sump and solarisation of the pumping unit and is expected to serve a population of roughly 5,000 people. Status: Construction work is about 80% complete. Installation of solar structures panels, & controller, 1No. 100m3 masonry tank complete & 1No. 50m3 ongoing, Pipe laying is complete',
            location: {
                center: [36.01750, 0.66741],
                zoom: 9.98,
                pitch: 60.00,
                bearing: 85.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'right',
            hidden: false,
            title: '7. SaimoSoi Dam Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'Work progress is at 90%. The Intake weir, 25m3 sump, 2No 10m3 BPT, is completepending painting and branding with fencing pending. The 2.1km 2” G.I gravity main complete pending construction of anchor and thrust blocks. 100m3 masonry tank complete. The 1.1km 2” UPVC pipeline laying is ongoing. The project is expected to serve a population of approximately 2,000 people.',
            location: {
                center: [35.94935, 0.67906],
                zoom: 10.65,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            hidden: '8. Kaboro Water Supply Project',
            //image: './path/to/image/source.png',
            description: 'The scope of works involves laying of approximately 3km of pipelines construction of a 50m3 storage tank, 2 No water kiosks, 2 No cattle troughs. The project is expected to serve a population of approximately 5,000 people. Status: Construction work is complete.1No. 50m3 masonry tank complete, 2No. Water kiosk complete 2No. Cattle trough complete Pipe laying is complete',
            location: {
                center: [36.16996, 0.83013],
                zoom: 7.26,
                pitch: 60.00,
                bearing: 30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'center',
            hidden: false,
            title: '9. Equalization Funds Projects',
            //image: './path/to/image/source.png',
            description: 'The projects are implemented in 3 Counties namely Narok, West Pokot, and Turkana.',
            location: {
                center: [35.97250, 1.13648],
                zoom: 5.39,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10.1',
            alignment: 'right',
            hidden: false,
            title: '9.1 Equalization Funds Projects - Narok',
            //image: './path/to/image/source.png',
            description: 'Narok: There are 7 No projects in which 5 of them are completed and awaiting commissioning and 2 at various stages of completion. The projects are expected to serve a population of over 10,000 people and livestock.',
            location: {
                center: [35.86662, -1.08263],
                zoom: 13.13,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10.2',
            alignment: 'right',
            hidden: false,
            title: '9.2 Equalization Funds Projects - West Pokot',
            //image: './path/to/image/source.png',
            description: 'West Pokot: There are 10 No projects at various stages of completion. The projects are expected to serve a population of over 15,000 people and livestock.',
            location: {
                center: [35.30788, 1.76841],
                zoom: 8.74,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10.3',
            alignment: 'right',
            hidden: false,
            title: '9.3 Equalization Funds Projects - Turkana',
            //image: './path/to/image/source.png',
            description: 'Turkana: There are 19 No projects and 9 No are 100% complete, while the rest are at the various implementation stages. The projects are expected to serve a population of over 20,000 people and livestock.',
            location: {
                center: [35.25794, 3.19261],
                zoom: 7.64,
                pitch: 57.00,
                bearing: -59.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: '10. Small Dams, Pans and Boreholes Programme',
            //image: './path/to/image/source.png',
            description: 'The programme is being implemented in various Counties. Four 4 pans are complete while the other nine water pans are at various stages of completion. The drilling, equipping, and civil works for the boreholes are On-going.',
            location: {
                center: [36.29179, 0.58199],
                zoom: 5.39,
                pitch: 60.00,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'right',
            hidden: false,
            title: '11. Water for Schools Programme 2018-2020 FY',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/Water%20for%20Schools%20Programme%202018-2020%20FY.png',
            description: 'The programme is being implemented in all the five Counties. The project scope involves drilling, equipping, and civil works for the boreholes. The projects are On-going with 90% drilled, equipping and civil works are at various stages of completion',
            location: {
                center: [35.87338, 0.39335],
                zoom: 7.19,
                pitch: 60.00,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: '12. Water for Schools Programme 2019-2020 FY',
            //image: './path/to/image/source.png',
            description: 'The programme is being implemented in all five Counties. The project scope involves drilling, equipping, and civil works for the boreholes. The Contracts have been awarded and signing of the Contracts is ongoing.',
            location: {
                center: [35.529324, -0.42975],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'right',
            hidden: false,
            title: '13. JICA Programme - West Pokot Rural Water Supply Projects',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/JICA%20Programme%20-%20East%20Pokot%20Rural%20Water%20Supply%20Projects.png',
            description: 'The programme is being implemented in Baringo County. The drilling and equipping of the 14 No. boreholes have been completed. The civil works involving the construction of water kiosk with 10m3 plastic tanks, fencing, and construction of cattle trough in all the 14 No boreholes are on-going at 95% completion.',
            location: {
                center: [35.11629, 1.31503],
                zoom: 10.94,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: '14. Public Priority Projects',
            //image: './path/to/image/source.png',
            description: 'The projects are implemented across all the five Counties of the Agency’s area of jurisdiction and they are at various stages of implementation.',
            location: {
                center: [35.85534, 0.25310],
                zoom: 7.35,
                pitch: 60.00,
                bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'center',
            hidden: false,
            title: 'World Bank Programe-Water and Sanitation Services Improvement Project (WaSSIP)',
            //image: './path/to/image/source.png',
            description: 'The programme is implemented in three Counties, namely; West POKOT, BARINGO and NAROK.',
            location: {
                center: [34.89555, 0.21166],
                zoom: 7.23,
                pitch: 58.50,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16.1',
            alignment: 'left',
            hidden: false,
            title: 'BARINGO:',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/Baringo%20construction%20of%20civil%20works%20.png',
            description: 'BARINGO: The project component involves Equipping and civil works for 5No. Boreholes (Kichingiri, Mugurin, Ndambul, Kokore & Maron). The scope of works involves the installation of pump and solar power for 3 boreholes and grid power for 2 boreholes, Construction of pump house, water kiosks, cattle troughs and laying of pipes. Equipping for 5No boreholes is complete. The construction of civil works for Kichingiri – 100%, Ndambul- 100% and operational, Mugurin- 60%, Kokore – 90%, Maron – 90%.',
            location: {
                center: [36.00930, 0.72770],
                zoom: 7.75,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16.2',
            alignment: 'left',
            hidden: false,
            title: 'WEST POKOT:',
            //image: './path/to/image/source.png',
            description: 'WEST POKOT: The scope involved Kapenguria water supply being rehabilitated. The project is complete and operational.',
            location: {
                center: [35.28592, 1.89699],
                zoom: 8.00,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16.3',
            alignment: 'left',
            hidden: false,
            title: 'NAROK:',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/Narok.png',
            description: 'NAROK: The project involved Equipping for 3No boreholes complete. Construction of civil worksis Ongoing, Project Status; -EorEmaiyan – 98%, EorEkule- 100% and operational. Kishermoruak -100% and operational',
            location: {
                center: [35.86892, -1.08991],
                zoom: 13.13,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            alignment: 'right',
            hidden: false,
            title: '16. Cross County Projects Programme',
            //image: './path/to/image/source.png',
            description: 'The programme is being implemented in all the five Counties. The project scope involves drilling, equipping, and civil works for the boreholes and some feasibility study and designs. National Water Harvesting & Ground Water Exploration Programme. The programme is being implemented in various Counties. The project scope involves drilling, equipping, and civil works for the boreholes',
            location: {
                center: [35.56737, 0.43097],
                zoom: 7.03,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            alignment: 'center',
            hidden: false,
            title: '17. National Drought Mitigation Programme',
            //image: './path/to/image/source.png',
            description: 'The project is implemented in four Counties, namely Turkana, West Pokot, Baringo and Narok.',
            location: {
                center: [34.89555, 0.21166],
                zoom: 7.23,
                pitch: 58.50,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18.1',
            alignment: 'left',
            hidden: false,
            title: '1. TURKANA',
            //image: './path/to/image/source.png',
            description: 'National Drought Mitigation Programme',
            location: {
                center: [35.30389, 3.02321],
                zoom: 7.51,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18.2',
            alignment: 'left',
            hidden: false,
            title: '2. WEST POKOT',
            //image: './path/to/image/source.png',
            description: 'National Drought Mitigation Programme',
            location: {
                center: [35.14204, 1.48458],
                zoom: 9.20,
                pitch: 58.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18.3',
            alignment: 'left',
            hidden: false,
            title: '3. BARINGO',
            //image: './path/to/image/source.png',
            description: 'National Drought Mitigation Programme',
            location: {
                center: [35.99217, 0.68079],
                zoom: 9.39,
                pitch: 52.00,
                bearing: -25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18.4',
            alignment: 'left',
            hidden: false,
            title: '4. NAROK',
            //image: './path/to/image/source.png',
            description: 'National Drought Mitigation Programme',
            location: {
                center: [34.89555, 0.21166],
                zoom: 7.23,
                pitch: 58.50,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18.5',
            alignment: 'right',
            hidden: false,
            title: ' National Drought Mitigation Programme',
            //image: './path/to/image/source.png',
            description: 'The programme involves repair and maintenance of water bowsers, repair of community boreholes, pipeline, water kiosks, cattle troughs and fencing, water trucking and supply of 10,000 litres plastic tanks. Status: Phase I & II of the programme is complete with Phase III ongoing. 16No projects are being implemented with 7No complete, repair of 10No water bowsers ongoing',
            location: {
                center: [34.89555, 0.21166],
                zoom: 7.23,
                pitch: 58.50,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'center',
            hidden: false,
            title: '18. Dams For Peace Programme',
            //image: './path/to/image/source.png',
            description: 'The programme is implemented in West-Pokot and Baringo Counties.',
            location: {
                center: [35.58603, 1.48124],
                zoom: 8.00,
                pitch: 53.50,
                bearing: 45.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19.1',
            alignment: 'right',
            hidden: false,
            title: '18.1 West-Pokot county - Kases Dam',
            //image: './path/to/image/source.png',
            description: ' For Kases Dam in West Pokot, the site has been handed over to the contractor. Mobilization is being done.',
            location: {
                center: [35.21244, 2.01617],
                zoom: 13.30,
                pitch: 53.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19.2',
            alignment: 'right',
            hidden: false,
            title: '18.2 Dams For Peace Programme - Baringo North',
            //image: './path/to/image/source.png',
            description:'Awaiting funds allocation,i.e.Chepkesim (Baringo North)',
            location: {
                center: [35.88357, 0.89865],
                zoom: 11.93,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19.3',
            alignment: 'right',
            hidden: false,
            title: '18. Dams For Peace Programme - Baringo South',
            //image: './path/to/image/source.png',
            description:'Awaiting funds allocation, i.e Chemorong’ion (Baringo South)',
            location: {
                center: [36.16725, 0.45276],
                zoom: 14.34,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'center',
            hidden: false,
            title: 'Water and Sewerage Projects',
            image: 'https://raw.githubusercontent.com/Water-Works-Development-Agency-in-Kenya/Central-Rift-Valley/main/images/watermain.png',
            description: 'For improved aceess to drinking water and sanitation',
            location: {
                center: [35.529324, -0.42975],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'center',
            hidden: false,
            title: 'Central Rift Valley Water Works Development Agency',
            //image: './path/to/image/source.png',
            description: 'TThnk you for the good work CRVWWDA you are doiong to ensure water and sanitation services are availed to the Community of Central Rift valley, Kenyans',
            location: {
                center: [35.529324, -0.42975],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
