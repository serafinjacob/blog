import ContentContainerLayout from "@/components/ContentContainer/Layout";


export default function Page() {
    return (
        <div className="pt-20 ml-[50px]">
            <div className="grid md:grid-cols-2 gap-4 ">
                <ContentContainerLayout {...{
                    title: 'Project One',
                    description: 'This is my first project',
                    image: 'https://www.shutterstock.com/image-vector/tropic-fruit-pineapple-icon-symbol-260nw-1386503363.jpg',
                    route: '/projects',
                    icon: '',
                }}
                />
                <ContentContainerLayout {...{
                    title: 'Project Two',
                    description: 'This is my second project',
                    image: 'https://img.freepik.com/free-vector/apple-colorful-vector-design_341269-1123.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702339200&semt=sph',
                    route: '/projects',
                    icon: '',
                }}
                />
            </div>
        </div>
        );
}