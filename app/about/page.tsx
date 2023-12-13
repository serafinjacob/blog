import ContentContainerLayout from "@/components/ContentContainer/Layout";
import ContentContainerUI from '/components/ContentContainer/ui/ContentContainer.module.css'

export default function Page() {
    return (
        <div className="m-[50px]">
            <h1 className="text-left text-4xl font-bold pb-3">
                Education
            </h1>
            <div className={ContentContainerUI.gridview}>
                <div>
                    <ContentContainerLayout {...{
                        title: 'University of Guelph',
                        description: 'Bachelor of Computing, Honours',
                        image: 'https://img.emg-services.net/institutes/institute9925/untitled-design-10-1-1-1.png',
                        route: '/about',
                        icon: '',
                    }}
                    />
                </div>

                <div>
                    <ContentContainerLayout {...{
                        title: 'Toronto Metropolitan University',
                        description: 'Certificate in Business Communication',
                        image: 'https://www.viewthevibe.com/wp-content/uploads/2021/08/IEO-IntLand-2220x1100-header.jpg',
                        route: '/about',
                        icon: '',
                    }}
                    />
                </div>
            </div>

            <h1 className="text-left text-4xl font-bold pb-3 pt-3">
                Work Experience
            </h1>
            <div className={ContentContainerUI.gridview}>
                <div>
                    <ContentContainerLayout {...{
                        title: 'Magna International',
                        description: 'Forklift Operator',
                        image: 'https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2021/04/vw0413magna.jpg',
                        route: '/about',
                        icon: '',
                    }}
                    />
                </div>

                <div>
                    <ContentContainerLayout {...{
                        title: 'Walmart Canada',
                        description: 'Fulfillment Associate',
                        image: 'https://corporate.walmart.com/content/corporate/en_us/about/international/walmart-canada/jcr:content/par/image_2_0.img.jpg/1693432664791.jpg',
                        route: '/about',
                        icon: '',
                    }}
                    />
                </div>

                <div>
                    <ContentContainerLayout {...{
                        title: 'The Home Depot Canada',
                        description: 'Receiving Supervisor',
                        image: 'https://www.shutterstock.com/shutterstock/photos/1175525740/display_1500/stock-photo-toronto-ontario-canada-september-home-depot-canada-corporate-office-building-in-1175525740.jpg',
                        route: '/about',
                        icon: '',
                    }}
                    />
                </div>
            </div>
        </div>
    );
}