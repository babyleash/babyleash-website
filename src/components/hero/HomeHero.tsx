import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Container from "@components/layout/Container";

const SHomeHero = styled.section`
  p a {
    color: #fff;
    display: inline-block;
    margin: 0 4px;
  }
`;

const SReadMore = styled.button`
  svg {
    fill: #fff;
    width: 30px;
    height: 30px;
  }

  polygon {
    fill: #fff;
    transition: all 0.2s ease-out;

    &.arrow-middle {
      opacity: 0.75;
    }

    &.arrow-top {
      opacity: 0.5;
    }
  }

  &:hover {
    polygon {
      fill: #fff;
      transition: all 0.2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
    }
  }
`;

const HomeHero: FC = () => {
  return (
    <SHomeHero className="home-hero">
      <Container className="py-10">
        <div className="flex items-center mb-9">
          <div className="mr-2 max-w-2xl tracking-wide text-xl leading-8">
            <h1 className="font-bold text-5xl text-white mb-6">
              A Decentralized{" "}
              <strong className="text-secondary">Meme Token</strong> backed by
              its community
            </h1>
            <p className="mb-8">
              babyLEASH has learned a few lessons from other meme tokens and now
              comes with their mistakes emitted, strong community, reasonable
              <Link href="/">
                <a>supply</a>
              </Link>
              , helpful burning mechanism, and much more exciting ideas that
              puts it on a growth path
            </p>
            <div className="flex items-center">
              <a
                className="rounded-3xl font-bold bg-gradient-to-r from-secondary-dark to-secondary text-white h-12 flex items-center px-7 text-base"
                href=""
              >
                Buy babyLEASH
              </a>

              <a href="" className="ml-4 text-white text-base">
                Learn more about it
              </a>
            </div>
          </div>
        </div>

        <SReadMore className="mx-auto flex flex-col items-center text-white text-sm font-light">
          Explore more
          <svg id="more-arrows" className="mt-2" viewBox="0 0 75 65">
            <polygon
              className="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              className="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              className="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </SReadMore>
      </Container>
    </SHomeHero>
  );
};

export default HomeHero;
