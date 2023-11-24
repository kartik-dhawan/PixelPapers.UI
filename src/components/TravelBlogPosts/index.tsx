"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { TravelBlogPost } from "@/utils/interfaces"
import { Box } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

interface TravelBlogPostProps {
  currentBlog: TravelBlogPost
  slug: string
}

const TravelBlogPosts = ({ currentBlog, slug }: TravelBlogPostProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // adding current blog in redux store
    dispatch(addCurrentBlog(currentBlog))
  }, [currentBlog])

  return (
    <Box>
      <Box>
        {currentBlog.blogType === "article" && <Box>ARTICLE</Box>}
        {currentBlog.blogType === "itinerary" && <Box>ITINERARY</Box>}
        <Box>{slug}</Box>
        <Box margin={"1rem"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
          molestias repellendus. Nam assumenda, quas distinctio explicabo modi
          deserunt totam aperiam facere nisi ullam ea incidunt aspernatur. Quae
          accusantium porro explicabo totam fuga deleniti exercitationem ut ex
          temporibus harum dicta aperiam dolores, ipsa atque commodi cumque
          laboriosam consequuntur voluptatum ducimus reiciendis fugit odio
          quaerat. Cum ipsam alias, corrupti eum repudiandae veritatis quaerat
          quam provident deleniti
          <br />
          <br />
          <br /> aliquam vel velit tempora culpa molestias aliquid sed
          voluptatem ea qui magnam! Velit perspiciatis sunt iste numquam aliquid
          ratione cum voluptatem molestias, aliquam totam dolore atque impedit
          omnis est ab, et voluptatibus, temporibus fugiat laudantium. Animi
          tempore, cupiditate nisi accusantium iure, iusto excepturi nesciunt
          quo dolorem ipsum amet sequi nihil distinctio non laudantium in
          incidunt recusandae perferendis ullam ducimus ut at corporis ratione.
          Laboriosam, possimus praesentium asperiores quae provident placeat
          accusamus vel minus recusandae quasi sequi repellendus hic rem.
          Architecto quia quasi magni praesentium molestiae blanditiis
          perferendis optio, esse minus ullam, asperiores deserunt vitae, veniam
          cum dolor quas cumque. Esse molestiae, at totam reprehenderit enim
          consectetur eum optio, dolorem adipisci modi, veritatis voluptatibus
          atque doloremque omnis laborum voluptate iste. Illo architecto ad, sit
          itaque nam in fugit officia, maiores voluptatibus nulla doloribus
          quasi. Veniam earum quidem quos mollitia sequi odio, animi assumenda,
          voluptates nemo dignissimos illo delectus iusto doloribus. Sint, nisi!
          Deserunt laudantium at rerum similique fuga offici
          <br />
          <br />
          <br />
          is omnis cumque cupiditate. Doloribus accusamus consequuntur fugit
          iste expedita voluptas deserunt, enim beatae cum dolor aliquid
          corrupti, culpa quasi inventore magni excepturi reprehenderit, quam
          asperiores! Cumque corrupti libero obcaecati porro dignissimos
          similique doloribus recusandae, hic delectus, deleniti illum
          necessitatibus eum neque quis, voluptate nisi fuga inventore esse
          tenetur vel! Quod molestias, delectus atque officiis enim repellat
          iure iusto quae quaerat beatae, quia autem animi voluptate, eius
          aliquam? Aliquid odit sed, ad reiciendis cupiditate debitis optio odio
          ipsa laborum obcaecati alias quod eius. Adipisci quibusdam illum
          inventore consequuntur reiciendis deleniti consequatur laboriosam.
          Doloremque, impedit? Ipsa blanditiis eveniet voluptatem nostrum
          consectetur beatae excepturi ipsum nemo, quaerat quam esse voluptate
          minima quo dicta doloribus fugiat ipsam nisi voluptatum aspernatur
          magni quisquam sit reprehenderit! Doloribus porro, veritatis rerum,
          dolorem quod quo optio beatae aliquam impedit ipsam sequi adipisci.
          Quis minima quisquam deleniti. Ipsa ex voluptatem at possimus enim
          fugiat omnis! Illum facilis consectetur aliquam neque, esse sint sed
          incidunt inventore nisi obcaecati accusantium aut illo tempore
          veritatis tenetur enim fuga, exercitationem ad ratione! Pariatur
          obcaecati veniam exercitationem corporis quidem, neque provident
          totam.
        </Box>
        <Box margin={"1rem"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et
          voluptates perspiciatis labore iure in fuga id rem, accusantium
          tenetur doloremque totam ratione sunt, cupiditate incidunt doloribus
          possimus. Veritatis rem quos atque, sunt repudiandae temporibus nulla
          eaque, corporis perspiciatis vitae debitis voluptas. Minus modi
          blanditiis ipsum tenetur id inventore doloremque repudiandae mollitia
          facere iste, eveniet obcaecati, consequuntur ipsam rem. Corporis et
          tenetur ipsum tempore eum, ipsam a animi blanditiis saepe repellat
          nisi, ullam officiis delectus qui rem possimus at consequatur quisquam
          sint officia. Quidem fugit distinctio repudiandae ipsam non repellat
          necessitatibus doloremque, cumque modi! Ducimus, facere labore
          nesciunt mollitia in impedit inventore itaque necessitatibus
          voluptatem explicabo eum, facilis ullam hic neque officia provident
          sunt natus perspiciatis ea esse? Repellat, accusantium odit
          repellendus magnam iste exped
          <br />
          <br />
          <br />
          ita assumenda provident? Cupiditate, reprehenderit ducimus similique
          at ad atque asperiores provident ut praesentium cumque temporibus
          corrupti aut natus doloribus unde quos perspiciatis eos odit officiis
          dignissimos. Distinctio, in illo! Excepturi natus quidem iste fugit
          vitae corporis perferendis voluptatibus commodi reiciendis quam eaque
          in omnis suscipit aliquam cum nostrum dolorum, quia voluptates
          mollitia dolore doloremque dignissimos temporibus quis odio. Sunt
          debitis exercitationem eum eaque dolorum libero nihil, vel tempora
          magnam fugit neque quis fuga saepe eos, deserunt perspiciatis ex.
          Autem, quas! Accusamus, voluptas quaerat! Reprehenderit quae veritatis
          dolores doloribus repellat. Quos sed aliquam explicabo nihil atque
          laborum. Id quam culpa voluptas facilis voluptatem recusandae dolores
          sequi temporibus similique, asperiores itaque quos ab, tempore
          quibusdam rerum nobis ad! Ab, harum impedit. Voluptatibus nostrum
          iusto tenetur sapiente modi blanditiis nesciunt provident
          reprehenderit consequatur eligendi cum, explicabo fugit ex minima
          eaque maiores sint quas ipsa commodi consectetur animi earum, debitis
          fuga excepturi. Cupiditate quidem, impedit exercitationem voluptatibus
          quae facere. Voluptatibus voluptates obcaecati quam nisi iusto.
          Explicabo nesciunt consequatur iusto porro dolores reiciendis
          accusamus quia incidunt quidem, odio magni similique veniam
          praesentium? Nisi expedita qui perspiciatis odio consectetur dolores
          iusto atque vero, tenetur mollitia voluptas iste ipsa nobis asperiores
          reprehenderit numquam suscipit sapiente ea quisquam quos. Harum nemo
          sint et repellendus, ea culpa, eius, sunt dolores praesentium
          doloribus quod vel beatae mollitia odit magnam! Voluptatibus officiis
          dolores ipsum quibusdam dolorum! Dicta natus consequuntur ut cum
          repellendus aut? Minus reiciendis ex labore alias vitae, illo nisi
          praesentium adipisci nulla, deserunt voluptatem eum possimus
          repudiandae corrupti fugit. Fugit quibusdam reprehenderit suscipit
          repudiandae impedit? Asperiores dignissimos, neque debitis similique
          nam expedita, dolor voluptate ipsa repellat totam doloremque atque
          nesciunt incidunt earum recusandae voluptates.
        </Box>
      </Box>
    </Box>
  )
}

export default TravelBlogPosts
