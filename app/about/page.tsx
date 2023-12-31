import ContentContainerLayout from "@/components/ContentContainer/Layout/index";
import ContentContainerUI from '/components/ContentContainer/ui/ContentContainer.module.css'

import { FaGraduationCap } from "react-icons/fa";
import { MdForklift as MagnaForkliftIcon} from "react-icons/md";
import { RiTeamFill as SupervisorIcon } from "react-icons/ri";
import { TbBrandWalmart as WalmartIcon} from "react-icons/tb";

export default function Page() {
    return (
        <div className="m-[50px]">
            <h1 className="justify-center text-center text-4xl font-bold pb-3">
                Education
            </h1>
            <div className={ContentContainerUI.grid}>
                <ContentContainerLayout {...{
                    title: 'University of Guelph',
                    description: 'Bachelor of Computing, Honours',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Johnston_Hall_University_of_Guelph.JPG',
                    license: 'https://creativecommons.org/licenses/by-sa/4.0',
                    licenseName: 'CC BY-SA 4.0',
                    route: '/about/guelph',
                    icon: <FaGraduationCap />
                }}
                />
                <ContentContainerLayout {...{
                    title: 'Toronto Metropolitan University',
                    description: 'Certificate in Business Communication',
                    image: 'https://www.viewthevibe.com/wp-content/uploads/2021/08/IEO-IntLand-2220x1100-header.jpg',
                    license: '',
                    licenseName: '',
                    route: '/about',
                    icon: <FaGraduationCap />
                }}
                />
            </div>

            <h1 className="justify-center text-center text-4xl font-bold pb-3 pt-5">
                Work Experience
            </h1>
            <div className={ContentContainerUI.grid}>
                <ContentContainerLayout {...{
                    title: 'Magna International',
                    description: 'Forklift Operator',
                    image: 'https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2021/04/vw0413magna.jpg',
                    route: '/about',
                    icon: <MagnaForkliftIcon />
                }}
                />
                <ContentContainerLayout {...{
                    title: 'Walmart Canada',
                    description: 'Fulfillment Associate',
                    image: 'https://corporate.walmart.com/content/corporate/en_us/about/international/walmart-canada/jcr:content/par/image_2_0.img.jpg/1693432664791.jpg',
                    route: '/about',
                    icon: <WalmartIcon />
                }}
                />
                <ContentContainerLayout {...{
                    title: 'The Home Depot Canada',
                    description: 'Receiving Supervisor',
                    image: 'https://www.shutterstock.com/shutterstock/photos/1175525740/display_1500/stock-photo-toronto-ontario-canada-september-home-depot-canada-corporate-office-building-in-1175525740.jpg',
                    route: '/about',
                    icon: <SupervisorIcon />
                }}
                />
            </div>

            <h1 className="justify-center text-center text-4xl font-bold pb-3 pt-5">
                Interests
            </h1>
            <div className={ContentContainerUI.grid}>
                <ContentContainerLayout {...{
                    title: 'Reading',
                    description: '',
                    image: '',
                    route: '/about',
                    icon: ''
                }}
                />
                <ContentContainerLayout {...{
                    title: 'Board Games',
                    description: '',
                    image: '',
                    route: '/about',
                    icon: ''
                }}
                />
                <ContentContainerLayout {...{
                    title: 'Robotics',
                    description: '',
                    image: '',
                    route: '/about',
                    icon: ''
                }}
                />
            </div>
        </div>
    );
}