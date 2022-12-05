import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/mousewheel'

import { PROJECTS } from '../constants'
import { Project } from '../Project'
import { Container, SwiperWrap } from './styles'

const projects: JSX.Element[] = PROJECTS.map((project: ProjectType) => {
    return (
        <SwiperSlide key={project.id}>
            <Project {...project} />
        </SwiperSlide>
    )
})

SwiperCore.use([Mousewheel])

export const Projects: FC = () => {
    return (
        <Container>
            <SwiperWrap>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2.5}
                    grabCursor={true}
                    mousewheel
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        365: {
                            slidesPerView: 1.5,
                        },
                        1150: {
                            slidesPerView: 2.5,
                        },
                    }}
                >
                    {projects}
                </Swiper>
            </SwiperWrap>
        </Container>
    )
}
