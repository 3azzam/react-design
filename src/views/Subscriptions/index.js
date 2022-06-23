import FreeCard from './freeCard'
import SubCard from './subscribeCard';
const data = [
    {
        id: 1,
        title: 'طالب',
        period: 'سنوى',
        fees: 'مجانا',
        perks: ['الميزة الاولى', 'الميزة الثانية', 'الميزة الثالثة']
    },
    {
        id: 2,
        title: 'طالب',
        period: 'سنوى',
        fees: 'مجانا',
        perks: ['الميزة الاولى', 'الميزة الثانية', 'الميزة الثالثة', 'الميزة الرابعة']
    },
    {
        id: 3,
        title: 'طالب',
        period: 'سنوى',
        fees: 'مجانا',
        perks: ['الميزة الاولى', 'الميزة الثانية', 'الميزة الثالثة', 'الميزة الرابعة', 'الميزة الخامسة', 'الميزة السادسة']
    }
]

const Subscriptions = () => {
    return (
        <div className="container" style={{marginBottom:"5rem"}} >
            <h2 className="mb-4 text-white" > العضويات </h2>
            <div className="row" >
                <div className="mb-2 col-12 col-sm-6 col-lg-3">
                    <FreeCard />
                </div>
                {data.map(item =>
                    <div key={item.id} className="mb-2 col-12 col-sm-6 col-lg-3">
                        <SubCard  data={item} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Subscriptions