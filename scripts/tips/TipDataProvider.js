const tipCollection = [
    {
        subject: "Feeding Fish",
        tipText: "The time of day you feed your fish is important. Try to do it at the same time every morning to help your fish feel safe."
    },
    {
        subject: "Fish Exercise",
        tipText: "Avoid taking your fish for walks, as they can't breathe air and don't have legs."
    }
]

export const useTip = () => {
    return tipCollection.slice()
}