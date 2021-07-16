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

const ComingSoon: FC = () => {
  return (
    <SHomeHero className="home-hero">
      <Container className="py-10">
        <div className="flex items-center mb-9">
          <div className="mx-auto text-center max-w-3xl tracking-wide text-xl leading-8">
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
            <div className="flex items-center justify-center">
              Coming soon...
            </div>
          </div>
        </div>
      </Container>
    </SHomeHero>
  );
};

export default ComingSoon;
