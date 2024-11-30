import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [
    {
      id: 1,
      image: 'src/Assets/Blog/9.jpg',
      date: 'May 13, 2023',
      title: 'The Benefits of Non-Surgical Body Contouring',
      description: 'Enhance your natural beauty with our premium dermal fillers. Whether you want plumper lips, higher cheekbones ...',
      detail: {
        img: '../../src/Assets/Blog/blog-detail.jpg',
        description: 'Non-surgical body contouring offers a convenient and effective way to enhance body shape and address stubborn fat areas without surgery. Here’s an overview of its key benefits:',
        services: [{
          id: 1,
          title: 'No Surgery, No Downtime',
          description: 'Non-surgical body contouring procedures like CoolSculpting, radiofrequency treatments, and ultrasound technology eliminate or reduce fat without any incisions. As a result, there’s little to no downtime, allowing clients to return to daily activities almost immediately.'
        }, {
          id: 2,
          title: 'Minimally Invasive with Low Risk',
          description: 'Since these procedures don’t involve surgery, there’s a lower risk of complications. Non-invasive methods are gentler on the body, minimizing risks like infection or scarring, making them ideal for clients seeking safe, low-impact solutions.'
        }, {
          id: 3,
          title: 'Gradual, Natural-Looking Results',
          description: 'Non-surgical treatments often show results gradually over weeks as the body naturally processes and eliminates fat cells. This gives clients a more subtle transformation that appears natural and gradual, making it less noticeable to others that they’ve undergone a procedure.'
        }, {
          id: 4,
          title: 'Quick and Convenient',
          description: 'Most non-surgical body contouring sessions take about 30–60 minutes, fitting easily into busy schedules. Many clients can even book appointments over lunch breaks, making it a flexible choice for those with active lifestyles.'
        }, {
          id: 5,
          title: 'Targeted Fat Reduction',
          description: 'Non-surgical body contouring treatments allow precise targeting of problem areas like the abdomen, thighs, arms, and love handles. This precision enables customized results, helping clients achieve their specific body goals without affecting other areas.'
        }, {
          id: 6,
          title: 'Little to No Discomfort',
          description: 'These treatments are designed to be as comfortable as possible, with minimal discomfort during and after the session. Some procedures, like CoolSculpting, may cause a cooling sensation, while others, like radiofrequency, may feel warm, but all are typically well tolerated.'
        }, {
          id: 7,
          title: 'Boosted Confidence and Motivation',
          description: 'The confidence that comes from achieving one’s body goals can be a major benefit. Many clients feel more motivated to maintain a healthy lifestyle following treatment, as they’re inspired to sustain and enhance their results.'
        }],
        faq: [
          {
            id: 1,
            question: 'What is non-surgical body contouring?',
            answer: 'It’s a set of treatments that reduce fat and shape the body without surgery, using methods like cryolipolysis (fat freezing) and radiofrequency.',
            isOpen: false
          },
          {
            id: 2,
            question: 'How long is the recovery?',
            answer: 'There’s typically no downtime, allowing you to resume regular activities immediately.',
            isOpen: false
          },
          {
            id: 3,
            question: 'How many sessions do I need?',
            answer: 'The number of sessions depends on the treatment type and individual goals. Generally, a series of 3–6 treatments spaced a few weeks apart is recommended for optimal results.',
            isOpen: false
          },
          {
            id: 4,
            question: 'Does it help with skin tightening?',
            answer: 'Some treatments, like radiofrequency, also stimulate collagen to firm and tighten the skin.',
            isOpen: false
          }
        ]
      }
    },
    {
      id: 2,
      image: 'src/Assets/Blog/14.png',
      date: 'June 22, 2022',
      title: '5 Essentials to Ensure Best Results from HIFU',
      description: 'High-Intensity Focused Ultrasound (HIFU) is a revolutionary non-surgical treatment for skin tightening and lifting. To maximize the effectiveness of your HIFU procedure and achieve optimal results, it’s essential to follow a few key steps.',
      detail: {
        img: '../../src/assets/Blog/result-hifu.jpg',
        description: 'High-Intensity Focused Ultrasound (HIFU) is a revolutionary non-surgical treatment for skin tightening and lifting. To maximize the effectiveness of your HIFU procedure and achieve optimal results, it’s essential to follow a few key steps.',
        services: [
          {
            id: 1,
            title: '1. Hydrate Regularly',
            description: 'Drink plenty of water before and after your treatment to keep your skin hydrated and promote optimal collagen production.'
          }, {
            id: 2,
            title: '2. Follow a Skincare Routine',
            description: 'Use gentle cleansers and hydrating products to maintain skin health. Avoid harsh exfoliants or active ingredients (like retinol) for a few days post-treatment.'
          }, {
            id: 3,
            title: '3. Protect Your Skin from the Sun',
            description: 'Wear SPF 30 or higher daily to shield your skin from UV damage, which can interfere with the treatment’s results.'
          }, {
            id: 4,
            title: '4. Avoid Heat and Heavy Activities',
            description: 'Steer clear of saunas, hot baths, and intense workouts for at least 48 hours after the procedure to prevent irritation.'
          }, {
            id: 5,
            title: '5. Be Patient with Results',
            description: 'HIFU results are not instant; collagen remodeling takes time. You’ll typically notice improvements over 2-3 months, so trust the process and avoid rushing into additional treatments.'
          },{
            id: 6,
            description: 'From proper skincare routines to post-treatment care, these essentials can enhance the collagen stimulation process and ensure long-lasting benefits. Whether you’re looking to lift sagging skin, reduce fine lines, or achieve a more youthful appearance, these tips are your guide to making the most of your HIFU journey.'
          }
        ],
        faq: [
          {
            id: 1,
            question: 'How soon will I see results after HIFU treatment?',
            answer: 'You may notice slight improvements immediately after the procedure, but optimal results typically appear 2-3 months later as collagen production increases.',
            isOpen: false
          },
          {
            id: 2,
            question: 'Can I wear makeup after HIFU treatment?',
            answer: 'It’s best to avoid makeup for at least 24 hours post-treatment to allow your skin to breathe and recover fully.',
            isOpen: false
          }, {
            id: 3,
            question: 'Why is hydration important after HIFU?',
            answer: 'Hydration supports collagen production and helps maintain skin elasticity, enhancing the overall effectiveness of the treatment.',
            isOpen: false
          }, {
            id: 4,
            question: 'Is there downtime after HIFU?',
            answer: 'HIFU is a non-invasive treatment with little to no downtime. You can resume normal activities right after, but follow aftercare instructions for the best results.',
            isOpen: false
          },
        ]
      }
    },
    {
      id: 3,
      image: 'src/Assets/Blog/15.jpeg',
      date: 'March 29, 2021',
      title: 'How to Improve Dark Circles: A Comprehensive Guide',
      description: "Dark circles under the eyes can be caused by various factors, including genetics, lack of sleep, stress, aging, or even lifestyle habits. While they can be frustrating, there are effective solutions to reduce and improve their appearance. Here's a comprehensive guide to tackling dark circles:",
      detail: {
        img: '../../src/Assets/Blog/dark-circles.jpg',
        description: `Dark circles under the eyes can be caused by various factors, including genetics, lack of sleep, stress, aging, or even lifestyle habits. While they can be frustrating, there are effective solutions to reduce and improve their appearance. Here's a comprehensive guide to tackling dark circles:`,
        services: [
          {
            id: 1,
            title: 'Identify the Cause',
            description: `
                  Understanding the root cause is key. Common reasons include:`,
            texts: [`Thin skin revealing blood vessels`, 'Pigmentation from sun exposure', 'Fluid retention or puffiness', 'Lifestyle habits like poor sleep or dehydration']
          }, {
            id: 2,
            title: 'Adopt Lifestyle Changes',
            abouts:
              [{
                id: 1,
                about: 'Prioritize Sleep:',
                aboutText: 'Aim for 7-8 hours of quality sleep nightly.'
              },
              {
                id: 2,
                about: 'Stay Hydrated:',
                aboutText: 'Drink enough water to prevent dehydration'
              },
              {
                id: 3,
                about: 'Reduce Salt Intake:',
                aboutText: 'Avoid salty foods to minimize puffiness.'
              }]
          }, {
            id: 3,
            title: 'Professional Treatments Available in Our Clinic',
            abouts: [{
              id: 1,
              about: 'Dermal Fillers:',
              aboutText: 'Restore volume under the eyes and reduce shadowing.'
            },
            {
              id: 2,
              about: 'Laser Therapy:',
              aboutText: 'Targets pigmentation and stimulates collagen.'
            },
            {
              id: 3,
              about: 'Chemical Peels:',
              aboutText: 'Lightens hyperpigmentation for brighter under-eye skin.'
            },
            {
              id: 4,
              about: 'Microneedling:',
              aboutText: 'Improves skin texture and encourages collagen production.'
            }]
          }, {
            id: 4,
            title: 'Topical Treatments',
            abouts: [{
              id: 1,
              about: 'Brightening Creams:',
              aboutText: 'Look for ingredients like Vitamin C, Kojic Acid, or Niacinamide.'
            },
            {
              id: 2,
              about: 'Retinol:',
              aboutText: 'Boosts collagen to thicken under-eye skin and reduce visibility of veins.'
            },
            {
              id: 3,
              about: 'Caffeine-Based Products:',
              aboutText: ' Reduces puffiness and tightens skin temporarily.'
            }]
          }, {
            id: 5,
            title: 'Sun Protection',
            description: 'Always wear sunscreen and sunglasses to prevent further pigmentation and damage.By combining proper skincare, professional treatments, and lifestyle adjustments, you can significantly reduce the appearance of dark circles and restore a refreshed, youthful look!'
          }
        ],
        faq: [
          {
            id: 1,
            question: 'What causes dark circles under the eyes?',
            answer: 'Dark circles can result from factors such as genetics, lack of sleep, dehydration, aging, pigmentation, or thin skin revealing blood vessels underneath.',
            isOpen: false
          }, {
            id: 2,
            question: 'Can dark circles go away completely?',
            answer: 'While some dark circles caused by lifestyle factors can be reduced significantly, genetic or structural dark circles may require ongoing management or professional treatments.',
            isOpen: false
          }, {
            id: 3,
            question: 'How long does it take to see improvement?',
            answer: 'Improvement depends on the cause and treatment method. Lifestyle changes and topical products may take weeks, while professional treatments can show results faster.',
            isOpen: false
          }, {
            id: 4,
            question: 'When should I consider professional treatments?',
            answer: `If topical products and lifestyle changes don't provide noticeable improvement, consult a dermatologist or aesthetic doctor for treatments like dermal fillers, laser therapy, or chemical peels.`,
            isOpen: false
          }

        ]
      }
    }, {
      id: 4,
      image: 'src/Assets/Blog/17.jpg',
      date: 'May 13, 2023',
      title: 'Top 5 Skin Treatments for a Year-Round Glow',
      description: 'Maintaining radiant and healthy skin all year requires treatments that target hydration, texture, and rejuvenation....',
      detail: {
        img: '../../src/Assets/Blog/top-skin-treat.jpg',
        description: `If topical products and lifestyle changes don't provide noticeable improvement, consult a dermatologist or aesthetic doctor for treatments like dermal fillers, laser therapy, or chemical peels.`,
        services: [
          {
            id: 1,
            title: `1. Hydrafacial`,
            description: `A Hydrafacial treatment combines cleansing, exfoliation, extraction, hydration, and antioxidant protection. It deeply hydrates the skin, removes impurities, and delivers nourishing serums, leaving your skin glowing and refreshed. Ideal for all skin types, this treatment is perfect for maintaining skin health throughout the year.`
          },
          {
            id: 2,
            title: `2. Laser Skin Resurfacing`,
            description: `Laser skin resurfacing uses advanced laser technology to treat sun damage, fine lines, wrinkles, and uneven skin texture. This treatment helps to stimulate collagen production, smooth out skin imperfections, and provide a glowing, youthful appearance. It’s an excellent choice for a deep, long-lasting glow.`
          },
          {
            id: 3,
            title: `3. Chemical Peels`,
            description: `A chemical peel exfoliates the outer layer of dead skin cells, revealing fresher, smoother, and more radiant skin beneath. It can help improve skin tone, reduce hyperpigmentation, and promote collagen production. Regular peels ensure your skin remains smooth and glowing year-round.`
          },
          {
            id: 4,
            title: `4. Microneedling`,
            description: `Microneedling is a minimally invasive treatment that uses tiny needles to create micro-injuries in the skin, stimulating the body’s natural healing process and collagen production. It helps improve skin texture, tone, and radiance, making it a perfect treatment to keep your skin glowing and healthy throughout the year.`
          },
          {
            id: 5,
            title: `5. Botox & Dermal Fillers`,
            description: `Botox and dermal fillers don’t just target wrinkles—they also restore volume and rejuvenate the face. While Botox smooths fine lines,`
          }
        ],
        faq: [
          {
            id: 1,
            question: `What is a Hydrafacial, and how does it help with glowing skin?`,
            answer: `A Hydrafacial is a multi-step facial treatment that cleanses, exfoliates, and hydrates the skin, leaving it refreshed and glowing. It is suitable for all skin types and helps improve skin texture and tone.`,
            isOpen: false
          },
          {
            id: 2,
            question: `How long do the results of laser skin resurfacing last?`,
            answer: `Laser skin resurfacing results can last for several months to a year, depending on the treatment intensity and your skincare routine. Regular maintenance treatments can help prolong the results.`,
            isOpen: false
          },
          {
            id: 3,
            question: `Is microneedling safe for all skin types?`,
            answer: `Yes, microneedling is safe for most skin types and helps improve skin texture, tone, and radiance. However, individuals with active skin conditions should consult with a professional before treatment.`,
            isOpen: false
          },
          {
            id: 4,
            question: `Do Botox and dermal fillers provide a permanent glow?`,
            answer: `Botox and dermal fillers provide temporary results that last from 3 to 12 months, depending on the treatment. They restore volume and smooth wrinkles, giving the face a refreshed and radiant appearance.`,
            isOpen: false
          }
        ]
      }
    }, {
      id: 5,
      image: 'src/Assets/Blog/19.png',
      date: 'June 22, 2022',
      title: 'Botox vs Fillers: Which One Is Right for You?',
      description: 'When it comes to non-surgical facial rejuvenation, Botox and dermal fillers are two of the most popular treatments...',
      detail: {
        img: '../../src/Assets/Blog/btx-filler.jpg',
        description: `Botox and dermal fillers are both popular aesthetic treatments but serve different purposes and are used to treat distinct signs of aging.`,
        services: [
          {
            id: 1,
            title: `Botox:`,
            abouts: [{
              id: 1,
              about: 'Purpose:',
              aboutText: 'Botox is designed to treat dynamic wrinkles—wrinkles caused by repetitive muscle movements such as smiling, frowning, or squinting.'
            }, {
              id: 2,
              about: 'How It Works:',
              aboutText: 'Botox works by temporarily relaxing the muscles beneath the skin, which smooths out wrinkles and prevents them from deepening. The treatment targets areas where facial expressions cause lines to form.'
            }, {
              id: 3,
              about: 'Common Treatment Areas:',
              aboutText: 'Forehead lines, crow’s feet (around the eyes), frown lines (between the eyebrows), and bunny lines on the nose.'
            }, {
              id: 4,
              about: 'Duration:',
              aboutText: 'Results last 3-6 months, with follow-up treatments required to maintain the effects.'
            }]
          },
          {
            id: 2,
            title: `Dermal Fillers:`,
            abouts: [{
              id: 1,
              about: 'Purpose:',
              aboutText: 'Dermal fillers restore volume to areas of the face that have lost fullness due to aging. They also smooth out static wrinkles, which are visible even when the face is at rest.'
            }, {
              id: 2,
              about: 'How It Works:',
              aboutText: 'Fillers are injected into the skin to add volume, plump sagging areas, and reduce the appearance of deep lines. They can also stimulate collagen production, improving skin texture over time.'
            }, {
              id: 3,
              about: 'Common Treatment Areas:',
              aboutText: 'Cheeks, lips, nasolabial folds (smile lines), marionette lines (around the mouth), and under-eye hollows.'
            }, {
              id: 4,
              about: 'Duration:',
              aboutText: 'Results can last 6-18 months, depending on the type of filler used and the treatment area.'
            }]
          },
          {
            id: 3,
            title: `Which is Right for You?`,
            texts: [
              `Botox is ideal if you are looking to smooth out wrinkles caused by facial expressions and muscle movements.`, `Fillers are the better option for restoring volume and treating static wrinkles that remain even when your face is relaxed.`
            ]
          },
          {
            id: 4,
            title: `Combination Treatments:`,
            description: `Many patients opt for a combination of both Botox and dermal fillers for a more comprehensive, youthful appearance. Botox can smooth expression lines, while fillers can address volume loss and deeper wrinkles, offering a more balanced rejuvenation.`
          }
        ],
        faq: [
          {
            id: 1,
            question: `Can I use Botox and fillers together?`,
            answer: `Yes, Botox and fillers can be combined to address both dynamic wrinkles and volume loss for more comprehensive rejuvenation.`,
            isOpen: false
          }, {
            id: 2,
            question: `Which treatment is best for forehead lines?`,
            answer: `Botox is ideal for treating forehead lines caused by muscle movement.`,
            isOpen: false
          }, {
            id: 3,
            question: `Which treatment is better for sagging cheeks or deep smile lines?`,
            answer: `Fillers are better for restoring volume to sagging cheeks and smoothing deep lines like nasolabial folds.`,
            isOpen: false
          }, {
            id: 4,
            question: `How do I know which treatment I need?`,
            answer: `Consult with a qualified aesthetic provider who can assess your concerns and recommend the best treatment for your skin type and goals.`,
            isOpen: false
          }
        ]
      }
    }, {
      id: 6,
      image: '../../src/Assets/Blog/18.jpg',
      date: 'March 29, 2021',
      title: '10 Ways to Protect and Maintain Healthy Skin Daily',
      description: 'Healthy, glowing skin doesn’t happen overnight—it’s the result of consistent care and smart choices. By incorpora...',
      detail: {
        img: '../../src/Assets/Blog/healthy-skin.jpg',
        description: `Achieving and maintaining healthy skin requires a balanced approach that combines good habits, proper care, and a mindful lifestyle. Follow these tips to keep your skin glowing and radiant:`,
        services: [
          {
            id: 1,
            title: `1. Stick to a Daily Skincare Routine`,
            abouts: [{
              id: 1,
              about: 'Cleanse:',
              aboutText: 'Use a gentle cleanser to remove dirt, oil, and impurities.'
            },
            {
              id: 2,
              about: 'Moisturize:',
              aboutText: 'Hydrate your skin with a suitable moisturizer to keep it soft and plump.'
            }, {
              id: 3,
              about: 'Protect:',
              aboutText: 'Apply sunscreen daily to shield your skin from UV damage.'
            }]
          }, {
            id: 2,
            title: `2. Stay Hydrated`,
            description: `Drink plenty of water to keep your skin hydrated and flush out toxins. Aim for at least 8 glasses of water a day.`
          }, {
            id: 3,
            title: `3. Eat a Balanced Diet`,
            description: `Consume foods rich in vitamins (A, C, and E), antioxidants, and omega-3 fatty acids. These nutrients promote skin elasticity, repair, and a natural glow.`
          }, {
            id: 4,
            title: `4. Get Quality Sleep`,
            description: `Aim for 7-8 hours of sleep every night. Rest is essential for skin regeneration and reducing signs of stress like dark circles and dullness.`
          }, {
            id: 5,
            title: `5. Exfoliate Regularly`,
            description: `Gently exfoliate 1-2 times a week to remove dead skin cells and improve skin texture. Use a scrub or chemical exfoliant that suits your skin type.`
          }, {
            id: 6,
            title: `6. Manage Stress`,
            description: `High stress levels can trigger breakouts and accelerate aging. Practice relaxation techniques like yoga, meditation, or exercise to keep stress at bay.`
          }, {
            id: 7,
            title: `7. Avoid Smoking and Limit Alcohol`,
            description: `Smoking damages collagen and elastin, while excessive alcohol dehydrates the skin. Avoid these habits for healthier, younger-looking skin.`
          }, {
            id: 8,
            title: `8. Use Skincare Products Wisely`,
            description: `Choose products with active ingredients like hyaluronic acid, retinol, or vitamin C based on your skin's needs. Avoid harsh chemicals that may irritate the skin.`
          }, {
            id: 9,
            title: `9. Protect Against Pollution`,
            description: `Use an antioxidant-rich serum or cream to combat free radicals caused by environmental pollutants. Cleanse thoroughly after exposure.`
          }, {
            id: 10,
            title: `10. Regular Check-Ups`,
            description: `Visit a dermatologist regularly to address any skin concerns early and ensure your skincare routine is effective.`
          }
        ],
        faq: [
          {
            id: 1,
            question: `Do I need to see a dermatologist regularly?`,
            answer: `If you have persistent skin concerns or want to optimize your skincare routine, visiting a dermatologist every 6-12 months is beneficial.`,
            isOpen: false
          },
          {
            id: 2,
            question: `Can stress affect my skin?`,
            answer: `Yes, stress can lead to breakouts, dullness, and premature aging. Managing stress through exercise, meditation, or relaxation can benefit your skin.`,
            isOpen: false
          },
          {
            id: 3,
            question: `How can I prevent premature aging?`,
            answer: `Use sunscreen daily, follow a consistent skincare routine, eat a balanced diet, stay hydrated, and avoid smoking and excessive alcohol consumption.`,
            isOpen: false
          },
          {
            id: 1,
            question: `What are the signs of unhealthy skin?`,
            answer: `Signs include dryness, redness, excessive oiliness, breakouts, and uneven texture. These may indicate the need for better skincare or lifestyle changes.`,
            isOpen: false
          }
        ]
      }
    }, {
      id: 7,
      image: '../../src/Assets/Blog/radient-skin.jpg',
      date: 'May 13, 2023',
      title: 'The Secret to Radiant Skin: Expert Tips for Every Age',
      description: 'HIFU treatments, with all the rage in recent years, have become de rigueur for face lifting. For the uninitiated,....',
      detail: {
        img: '../../src/Assets/Blog/radient-skin-detail.jpg',
        description: `Radiance stems from healthy, well-nourished skin that glows from within. By understanding your skin's needs and adopting the right habits, you can unlock your natural glow at any age.`,
        services: [
          {
            id: 1,
            title: `Stay Hydrated`,
            description: `Drink plenty of water daily to keep your skin hydrated from the inside out. Proper hydration plumps the skin, reduces dryness, and gives it a healthy glow.`
          }, {
            id: 2,
            title: `Follow a Skincare Routine`,
            description: `Cleansing, moisturizing, and protecting your skin are essential steps. Use products with ingredients like hyaluronic acid for hydration, vitamin C for brightness, and sunscreen for protection.`
          }, {
            id: 3,
            title: `Exfoliate Regularly`,
            description: `Gentle exfoliation removes dead skin cells, allowing fresh, healthy skin to shine through. Aim for 1-2 times a week, depending on your skin type.`
          }, {
            id: 4,
            title: `Treat Skin Concerns Early`,
            description: `Address issues like pigmentation, acne scars, or dullness with professional treatments such as chemical peels, laser therapy, or microdermabrasion.`
          }, {
            id: 5,
            title: `Stay Active`,
            description: `Regular exercise improves blood circulation, delivering oxygen and nutrients to your skin, leaving it glowing and vibrant.`
          }, {
            id: 6,
            title: `Consistency is Key`,
            description: `Radiance comes from a long-term commitment to self-care. Stick to your skincare routine and healthy habits for lasting results.`
          }, {
            id: 7,
            title: `Top Treatments for Radiant Skin`,
            texts: [
              'Hydrafacial',
              'Chemical Peels',
              'Microneedling with PRP (Platelet-Rich Plasma)',
              'Laser Skin Resurfacing',
              'Collagen-Stimulating Treatments (HIFU or RF Therapy)'
            ]
          }
        ],
        faq: [
          {
            id: 1,
            question: `What is the most important factor for radiant skin?`,
            answer: `The most important factor is maintaining a healthy skincare routine that includes cleansing, moisturizing, exfoliating, and protecting your skin with sunscreen daily.`,
            isOpen: false
          },
          {
            id: 2,
            question: `Are professional treatments necessary for radiant skin?`,
            answer: `Not always, but treatments like Hydrafacials, chemical peels, and laser therapy can enhance your skin’s appearance, especially for addressing specific concerns like dullness or uneven tone.`,
            isOpen: false
          },
          {
            id: 3,
            question: ` What are some quick fixes for a radiant glow before an event?`,
            answer: `Hydrating facials, oxygen treatments, or LED light therapy can give you an instant glow before special occasions.`,
            isOpen: false
          },
          {
            id: 4,
            question: `What is the best way to maintain radiant skin year-round?`,
            answer: `Stay consistent with your skincare routine, eat a healthy diet, stay hydrated, and schedule professional treatments as needed to maintain your glow all year.`,
            isOpen: false
          }
        ]
      }
    }, {
      id: 8,
      image: 'src/Assets/Blog/20.jpg',
      date: 'June 22, 2022',
      title: 'Understanding Acne Scars: Treatments That Actually Work',
      description: 'Acne scars can be a lingering reminder of past breakouts, but the good news is that effective treatments are available ....',
      detail: {
        img: '../../src/Assets/Blog/undestand-acne-scar.jpg',
        description: `Acne scars can be a source of frustration, but effective treatments are available to reduce their appearance and improve skin texture. Here's a breakdown of acne scars and the solutions that deliver real results.`,
        services: [
          {
            id: 1,
            title: `Types of Acne Scars`,
            abouts: [{
              id: 1,
              about: 'Atrophic Scars:',
              aboutText: 'The skin doesn’t produce enough collagen during the healing process.'
            },
            {
              id: 2,
              about: 'Hypertrophic Scars:',
              aboutText: 'Raised scars caused by excess collagen production.'
            }, {
              id: 3,
              about: 'Post-inflammatory Hyperpigmentation (PIH):',
              aboutText: 'Dark spots left behind after acne heals (not true scars but often mistaken for them).'
            }]
          }, {
            id: 2,
            title: `Top Treatments for Acne Scars`,
            contents: [{
              id: 1,
              content: '1. Laser Skin Resurfacing',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: 'Removes damaged layers of skin and stimulates collagen production.'
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'Atrophic scars, especially boxcar and rolling scars.'
              }]
            }, {
              id: 2,
              content: '2. Microneedling with PRP',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: 'Tiny needles create controlled micro-injuries to boost collagen production, enhanced with platelet-rich plasma for faster healing.'
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'Reducing the depth of scars and improving skin texture.'
              }],

            }, {
              id: 3,
              content: ' 3. Chemical Peels',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: ' Exfoliates the skin deeply to improve discoloration and texture.'
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'PIH and mild atrophic scars.'
              }]
            }, {
              id: 4,
              content: ' 4. Dermal Fillers',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: `Temporary fillers plump up depressed scars to even out the skin's surface.`
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'Ice-pick and boxcar scars.'
              }]
            }, {
              id: 5,
              content: ' 5. Radiofrequency Microneedling',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: ' Combines microneedling with radiofrequency energy to tighten and improve skin texture.'
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'Deeper scars and overall rejuvenation.'
              }]
            }, {
              id: 6,
              content: ' 6. Topical Treatments',
              abouts: [{
                id: 1,
                about: 'How it works:',
                aboutText: ' Retinoids, vitamin C serums, and AHAs improve mild discoloration and texture.'
              }, {
                id: 2,
                about: 'Best for:',
                aboutText: 'Early-stage scars and maintenance.'
              }]
            }]
          }, {
            id: 3,
            title: `Maintenance Tips`,
            texts: ['Use sunscreen daily to prevent further discoloration.',
              'Maintain a consistent skincare routine with ingredients like retinol and niacinamide.',
              'Avoid picking at active acne to reduce the risk of scarring.'],

          }
        ],
        faq: [
          {
            id: 1,
            question: `Can acne scars be completely removed?`,
            answer: `While it’s difficult to erase scars entirely, treatments like microneedling, laser resurfacing, and chemical peels can significantly reduce their appearance.`,
            isOpen: false
          }, {
            id: 2,
            question: `What’s the best treatment for atrophic scars?`,
            answer: `Microneedling, subcision, and laser resurfacing are highly effective for atrophic scars like rolling, boxcar, and ice-pick scars.`,
            isOpen: false
          }, {
            id: 3,
            question: `How long does it take to see results from acne scar treatments?`,
            answer: `Results vary by treatment but generally take 4-6 weeks for improvement, with optimal results appearing after multiple sessions.`,
            isOpen: false
          }, {
            id: 4,
            question: `How much do acne scar treatments cost?`,
            answer: `Costs vary depending on the treatment and number of sessions, ranging from affordable topical options to more expensive professional treatments like lasers or fillers.`,
            isOpen: false
          }
        ]
      }
    }, {
      id: 9,
      image: 'src/Assets/Blog/12.png',
      date: 'June 22, 2022',
      title: 'Areas You Never Knew Botox Can Be Used On!',
      description: 'Botox is widely known for its ability to smooth out forehead lines and crow’s feet, but did you know it can be used ....',
      detail: {
        img: '../../src/Assets/Blog/botox-canbe-used.jpg',
        description: `Botox is widely known for reducing wrinkles on the forehead and around the eyes, but it has surprising uses beyond these common areas. Here are some lesser-known yet effective applications of Botox:`,
        services: [
          {
            id: 1,
            title: `Jawline Slimming`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Botox relaxes the masseter muscles, creating a slimmer, more defined jawline.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'People with a square jaw or those suffering from teeth grinding (bruxism).'
            }]
          }, {
            id: 2,
            title: `Neck Bands (Platysma)`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Reduces the appearance of vertical neck lines by relaxing the platysma muscles.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'A smoother, more youthful neck.'
            }]
          }, {
            id: 3,
            title: `Gummy Smile`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: ': Minimizes the appearance of gums when smiling by relaxing the upper lip muscles.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'Enhancing smile aesthetics.'
            }]
          }, {
            id: 4,
            title: `Bunny Lines`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Smooths out fine lines on the sides of the nose.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'A more polished and youthful look.'
            }]
          }, {
            id: 5,
            title: `Chin Dimpling`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Relaxes the mentalis muscle to smooth out dimples or "orange peel" texture on the chin.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'A more even and refined chin appearance.'
            }]
          }, {
            id: 6,
            title: `Excessive Sweating (Hyperhidrosis)`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Temporarily blocks sweat glands in areas like underarms, palms, or soles.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'Managing excessive sweating and improving confidence.'
            }]
          }, {
            id: 7,
            title: `Migraine Relief`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Reduces the frequency and severity of migraines by targeting specific muscle groups.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'People suffering from chronic migraines.'
            }]
          }, {
            id: 8,
            title: `Facial Symmetry Adjustments`,
            abouts: [{
              id: 1,
              about: 'How it works:',
              aboutText: 'Corrects imbalances in facial muscles for a more harmonious appearance.'
            }, {
              id: 2,
              about: 'Best for:',
              aboutText: 'Restoring symmetry after injury or due to natural asymmetry.'
            }]
          }
        ],
        faq: [
          {
            id: 1,
            question: `Can Botox really slim the jawline?`,
            answer: `Yes, Botox can relax the masseter muscles, reducing their size and creating a slimmer, more defined jawline.`,
            isOpen: false
          }, {
            id: 2,
            question: `Is Botox safe for migraine relief?`,
            answer: `Botox is FDA-approved for managing chronic migraines by targeting specific muscle groups that contribute to headaches.`,
            isOpen: false
          }, {
            id: 3,
            question: `Are these uses of Botox suitable for everyone?`,
            answer: `While Botox is versatile, a consultation with a qualified professional is essential to determine if it's the right option for your specific concerns.`,
            isOpen: false
          }, {
            id: 4,
            question: `Is there downtime after Botox in these areas?`,
            answer: `Most Botox treatments require minimal to no downtime, though slight redness or swelling may occur temporarily.`,
            isOpen: false
          }
        ]
      }
    }

  ]
}))

export default useBlogStore;