'use server'
import algoliasearch from 'algoliasearch'
import { createServer } from '../supabase/supabaseServer'

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_WRITE_API
)

const index = client.initIndex('prod_pages')

const oldRecipients = [
  {
    first_name: 'Brenna',
    sub_title:
      'Brenna is a 4 year old battling DIPG (a rare and aggressive form of childhood brain cancer).',
    path_url: 'brenna-is-battling-brain-cancer',
    objectID: 'brenna-is-battling-brain-cancer',
  },
  {
    first_name: 'Sydney',
    sub_title:
      'Sydney is a 6 year old battling DIPG (a rare and aggressive form of childhood brain cancer).',
    path_url: 'sydney-is-battling-brain-cancer',
    objectID: 'sydney-is-battling-brain-cancer',
  },
  {
    first_name: 'Miguel',
    sub_title:
      'Miguel has been battling a brain tumor for years and is suffering from seizures and bad headaches.',
    path_url: 'miguel-is-battling-a-brain-tumor-and-seizures',
    objectID: 'miguel-is-battling-a-brain-tumor-and-seizures',
  },
  {
    first_name: 'Mickey',
    sub_title:
      'Michaela (“Mickey”) is 3 years old and was diagnosed with Sanfilippo Syndrome.',
    path_url: 'mickey',
    objectID: 'mickey',
  },
  {
    first_name: 'Sammy',
    sub_title:
      'Our sweet friend Sammy has been courageously battling neuroblastoma.',
    path_url: 'sammy-is-battling-neuroblastoma',
    objectID: 'sammy-is-battling-neuroblastoma',
  },
  {
    first_name: 'Brody',
    sub_title:
      'He is 5 years cancer free from battling AT/RT (an extremely rare and aggressive form of brain cancer)..',
    path_url: 'brody-is-5-years-cancer-free',
    objectID: 'brody-is-5-years-cancer-free',
  },
  {
    first_name: 'Ryan',
    sub_title:
      'Our friend Ryan has been bravely battling pancreatic disease since he was 5.',
    path_url: 'ryan-is-battling-pancreatic-disease',
    objectID: 'ryan-is-battling-pancreatic-disease',
  },
  {
    first_name: 'Ayden',
    sub_title: 'Ayden’s neuroblastoma cancer is stable and dissipating.',
    path_url: 'ayden-is-battling-neuroblastoma-again',
    objectID: 'ayden-is-battling-neuroblastoma-again',
  },
  {
    first_name: 'Amy',
    sub_title:
      'Our friend Amy has been fiercely battling very complex severe intestinal dysmotility for many years.',
    path_url: 'amy-is-battling-serious-health-issues',
    objectID: 'amy-is-battling-serious-health-issues',
  },
  {
    first_name: 'Tink',
    sub_title:
      'Many of you have been praying for Adrienne “Tink” as she battles leukemia.',
    path_url: 'tink-is-celebrating-her-6th-birthday',
    objectID: 'tink-is-celebrating-her-6th-birthday',
  },
  {
    first_name: 'Alyssa',
    sub_title:
      'Sweet baby Alyssa is battling neuroblastoma (a form of childhood cancer).',
    path_url: 'alyssa-is-battling-neuroblastoma',
    objectID: 'alyssa-is-battling-neuroblastoma',
  },
  {
    first_name: 'Emma',
    sub_title:
      'Many of you may remember our friend Emma who was diagnosed with leukemia 5 years ago.',
    path_url: 'emma-is-battling-leukemia-again',
    objectID: 'emma-is-battling-leukemia-again',
  },
  {
    first_name: 'Justin',
    sub_title:
      'Many of you may remember our friend Justin who battled and overcame leukemia a few years back. Unfortunately cancer has returned.',
    path_url: 'justin-is-battling-cancer-again',
    objectID: 'justin-is-battling-cancer-again',
  },
  {
    first_name: 'David',
    sub_title:
      'GREAT NEWS! After many years, a kidney has been found for David and he is finally getting a kidney!',
    path_url: 'david-got-a-kidney-transplant',
    objectID: 'david-got-a-kidney-transplant',
  },
  {
    first_name: 'Damian',
    sub_title:
      'Our sweet friend Damian has been courageously battling retinoblastoma',
    path_url: 'damian-is-battling-retinoblastoma-again',
    objectID: 'damian-is-battling-retinoblastoma-again',
  },
  {
    first_name: 'Amanda',
    sub_title:
      'Amanda was diagnosed with breast cancer and is recovering from major surgery she had late last year.',
    path_url: 'amanda-is-battling-breast-cancer',
    objectID: 'amanda-is-battling-breast-cancer',
  },
  {
    first_name: 'Braiden',
    sub_title:
      'Today is our friend Braiden’s 7th birthday! Unfortunately, his family has been told it will most likely be his last after a long and brave fight against neuroblastoma.',
    path_url: 'braiden-is-battling-neuroblastoma-again',
    objectID: 'braiden-is-battling-neuroblastoma-again',
  },
  {
    first_name: 'Marik',
    sub_title:
      'Many of you may remember our friend Marik who was diagnosed with and lost his leg to Osteosarcoma (a type of bone cancer) a few years back.',
    path_url: 'marik-is-battling-osteosarcoma-again',
    objectID: 'marik-is-battling-osteosarcoma-again',
  },
]

export const pushData = async (data) => {
  try {
    await index.saveObjects(data, {
      autoGenerateObjectIDIfNotExist: true,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

export const pushSupabaseData = async () => {
  try {
    const supabase = createServer()
    const { data: recipients, error } = await supabase
      .from('recipients')
      .select('*')

    const updatedRecipients = recipients?.map((item) => {
      const newPath = `recipients/${item?.path_url}`
      return { ...item, path_url: newPath, objectID: item?.path_url }
    })

    await index.saveObjects(updatedRecipients, {
      autoGenerateObjectIDIfNotExist: true,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
