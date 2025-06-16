import { ref } from 'vue'

export const usePlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Forfait Bronze',
      price: '1500',
      duration: '1 Mois',
      btnColor: 'bg-gradient-to-r from-amber-600 to-orange-700',
      hover: 'hover:shadow-amber-600/20 hover:shadow-orange-700/20',
      color: 'text-amber-400',
      features: [
        'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
      ]
    },
    {
      id: 2,
      name: 'Forfait Argent',
      price: '4000',
      duration: '3 Mois',
      btnColor: 'bg-gradient-to-r from-gray-300 to-gray-400',
      hover: 'hover:shadow-gray-300/20 hover:shadow-gray-400/20',
      color: 'text-gray-300 text-gray-400',
      features: [
        'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé'
      ],
    },
    {
      id: 3,
      name: 'Forfait Gold',
      price: '7000',
      duration: '6 Mois',
      btnColor: 'bg-gradient-to-r from-yellow-400 to-amber-500',
      hover: 'hover:shadow-yellow-400/20 hover:shadow-amber-500/20',
      color: 'text-yellow-400',
      features: [
        'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
  {
    id: 4,
    name: 'Forfait Diamant',
    price: '10000',
    duration: '12 Mois',
    btnColor: 'bg-gradient-to-r from-cyan-400 to-blue-600',
    hover: 'hover:shadow-cyan-500/20 hover:shadow-blue-700/20',
    color: 'text-cyan-300',
    features: [
      'Accès illimité aux contenus',
      'Mode Hors ligne',
      'Accès aux chaînes de télé',
    ],
  },
]

  return {
    plans,
    getPlanById: (id:any) => plans.find(plan => plan.id === id)
  }
}