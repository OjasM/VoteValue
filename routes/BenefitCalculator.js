const BJPBenefits = {

    age:{
        "children":[
            "We will formulate a comprehensive <b>Child Protection Framework</b> to facilitate the seing up of\
            standards and robust inspection and monitoring of child care institutions across India.",
            "We will initiate a <b>‘Prime Minister Innovative Learning Program’</b> to bring together talented children for a ceain period in a year in one place from all over the\
            country and provide them with facilities and resources to instill a culture of lateral thinking and innovation among them. ",
            "We will ensure full immunization coverage for all the children and pregnant women by 2022.",
            "We will endeavour to make the National Nutrition Mission a mass movement and strengthen\
            infrastructure and capacity in all Anganwadis."
        ],
        "youth":[
            "We will create new opportunities of employment by providing more support to the 22 major Champion Sectors ",
            "We will launch a new scheme to provide collateral-free credit up to ₹50 lakh for entrepreneurs. We\
            will guarantee 50% of the loan amount for female entrepreneurs and 25% of the loan amount for\
            male entrepreneurs.",
            "We will set-up new 'Entrepreneurial Northeast' scheme to provide financial support to the micro,\
            small and medium industries and for employment generation in the Northeastern state.",
            "We will incentivise and reward self-organized groups of youth who adopt social assets like schools,\
            hospitals, lakes, public gardens etc. and ensure their maintenance and cleanliness to encourage\
            greater civic engagement of the youth."
        ],
        "senior-citizen":[
            "We will strengthen the Rashtriya Vayoshri Yojana to ensure that poor senior citizens in need of aids and\
            assistive devices receive them in a timely manner."
        ]
    },

    sex: {
        "male": [],
        "female":[
            " We will ensure that ample financial support is available to girls through out\
            their education and subsidised education loans are provided for higher education. ",
            "We are commited to make women equal partners in and equal beneficiaries of the progress and\
            prosperity of the nation and will formulate a comprehensive <b>‘Women in Workforce’</b> roadmap focussed\
            on dramatically increasing the female workforce participation rate over the next five years",
            "To generate better work opportunities for women, 10% material to be sourced for government\
            procurement will be done from MSMEs having at least 50% women employees in their workforce.",
            "Women's welfare and development will be accorded a high priority at all levels within the government,\
            and the BJP is commited to 33% reservation in parliament and state assemblies through a\
            constitutional amendment."
        ],
        "transgender":[
            "We are commited to bring transgenders to the mainstream through adequate socio-economic and policy initiatives. ",
            "We will ensure self-employment and skill development avenues for transgender youth."
        ]
    }
}

const INCBenefits = {

    age:{
        "children":[
            "Congress promises to expand the <b>ICDS programme</b>, increase funding support and increase the number of Anganwadis. Anganwadi workers shall be paid the notified State minimum wage.",
            "Based on need and demand, <b>Anganwadis</b> will include a <b>crèche</b> to provide day care to small children and to empower working mothers.",
            "Nutritious food is the mainstay of the <b>ICDS programme</b>. We will closely monitor the coverage and quality of the programme. There will be a <b>social audit</b> of the outcomes pertaining to the improvement of children’s nutrition levels.",
            "We will ensure that every child is vaccinated."
        ],
        "youth":[
            "Congress will create a <b>new Ministry of Industry, Services and Employment</b>",
            "All of the <b>4 lakh vacancies</b> as on 1st April 2019 in the Central Government, Central Public Sector Enterprises, Judiciary and Parliament will be filled before the end of March 2020.",
            "We will expand the <b>ASHA programme</b> and appoint a second ASHA worker in all villages with a population exceeding 2500 persons.",
            "We promise <b>regulatory forbearance</b> for Micro and Small Enterprises. They will be exempt from all applicable laws and regulations (except the Minimum Wages Act and tax laws) for a period of 3 years from 1st April 2019, or, in the case of new businesses, from the date of commencement of business."
        ],
        "senior-citizen":[
            "Under the <b>Right to Healthcare Act</b>, we will provide affordable and quality healthcare to senior citizens in hospitals including free diagnostics, out-patient treatment, medicines and hospital treatment.",
            "We will introduce <b>well-designed pension and health insurance schemes</b> that will guarantee insured persons a life of dignity and comfort when they become senior citizens.",
            "We will take measures to ensure easy access to legal services and recourse to senior citizens especially in cases of neglect, abuse, abandonment, eviction and financial fraud."
        ]
    },

    sex : {
        "male":[],
        "female":[
            "Congress promises to pass the Constitution (Amendment) Bill to provide for reservation of <b>33 per cent of seats</b> in the <b>Lok Sabha and State Legislative Assemblies</b> in the first session of the 17th Lok Sabha and in the Rajya Sabha.",
            "We will amend the Service Rules to reserve for women <b>33 per cent of appointments of posts in the Central Government.</b>",
            "Congress promises to launch a programme to appoint an <b>Adhikar Maitri</b> in every Panchayat to serve as a paralegal to educate women on, and assist them in the enforcement of, their legal rights. "
        ],
        "transgender":[
            "Congress promises to ensure the effective implementation of the judgment in the <b>Navtej Singh Johar case</b>. We will protect the rights of the LGBTQIA+ community.",
            "We will immediately withdraw the <b>Transgender Bill, 2018</b>, pending in Parliament. Instead, Congress will introduce a Bill that will be consistent with the judgment in the NALSA case. The new Bill will be drafted in consultation with the LGBTQIA+ community.",
            "We will direct that <b>gender sensitivity training</b>, especially for the rights of the LGBTQIA+ community, be made mandatory in all government departments and organisations including the Armed Forces and the Police Forces."
        ]
    }
}

const AllBenefits = {"BJP":BJPBenefits,"INC":INCBenefits};

class BenefitCalculator{

    constructor(attrs){
        this.attrs = attrs;
    }

    getAttrBenefits(attr, attrValue){
        var attrBenefits = {};
        attrBenefits[attrValue] = {};
        
        Object.keys(AllBenefits).forEach(function(party) {
            attrBenefits[attrValue][party] = AllBenefits[party][attr][attrValue] ? AllBenefits[party][attr][attrValue] : [];
        });

        return attrBenefits;
    }


    getBenefits(){

        var attrs = this.attrs;
        var benefits = {};

        Object.keys(AllBenefits).forEach(function(party) {

            benefits[party] = {};

            Object.keys(attrs).forEach(function(attr) {
                if(attrs[attr])
                    benefits[party][attrs[attr]] = AllBenefits[party][attr][attrs[attr]] ? AllBenefits[party][attr][attrs[attr]] : [];
            });
        });

        return benefits;
    }
}

module.exports.BenefitCalculator = BenefitCalculator;