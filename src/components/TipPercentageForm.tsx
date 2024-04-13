
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    handleTip: (e: any) => void
}

const TipPercentageForm = ({ handleTip }: TipPercentageFormProps) => {

    return (
        <div>
            <h2 className="font-black text-2xl">Propina: {''}</h2>

            <form action="">
                {tipOptions.map((tip) => {
                    return <div key={tip.id} className="flex gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            type="radio"
                            id={tip.id}
                            name="tip"
                            value={tip.value}
                            onChange={(e) => handleTip(e)}
                        />
                    </div>
                })}

            </form>
        </div>
    )
}

export default TipPercentageForm