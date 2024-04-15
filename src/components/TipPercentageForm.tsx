
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
    handleTip: (e: React.ChangeEvent<HTMLInputElement>) => void
    tip: number
}

const TipPercentageForm = ({ handleTip, tip }: TipPercentageFormProps) => {

    return (
        <div>
            <h2 className="font-black text-2xl">Propina: {''}</h2>

            <form action="">
                {tipOptions.map((tipOption) => {
                    return <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            type="radio"
                            id={tipOption.id}
                            name="tipOptions"
                            value={tipOption.value}
                            onChange={(e) => handleTip(e)}
                            checked={tipOption.value == tip}
                        />
                    </div>
                })}

            </form>
        </div>
    )
}

export default TipPercentageForm