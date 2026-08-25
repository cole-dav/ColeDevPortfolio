import React from 'react'
import styled from 'styled-components'

const HobbyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 10px;
`;

const HobbyCard = styled.div`
    border: 1px solid #808080;
    padding: 8px;
    background: #f5f5f5;
`;

const HobbyName = styled.p`
    margin: 0 0 4px;
    font-weight: bold;
`;

const HobbyDetail = styled.p`
    margin: 0 0 6px;
    font-size: 0.9em;
    color: #444;
`;

const MediaGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

const MediaThumb = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #808080;
`;

const MediaVideo = styled.video`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #808080;
`;

const EmptyMedia = styled.p`
    margin: 0;
    font-size: 0.85em;
    font-style: italic;
    color: #808080;
`;

function Hobbies({ content }) {
    const { intro, items } = content;
    return (
        <div>
            <h2>Hobbies</h2>
            {intro && <p>{intro}</p>}
            <HobbyGrid>
                {
                    items.map((item, idx) => (
                        <HobbyCard key={idx}>
                            <HobbyName>{item.name}</HobbyName>
                            {item.detail && <HobbyDetail>{item.detail}</HobbyDetail>}
                            {
                                item.media && item.media.length > 0 ? (
                                    <MediaGrid>
                                        {
                                            item.media.map((m, mIdx) => (
                                                m.type === 'video' ? (
                                                    <MediaVideo key={mIdx} src={m.src} controls />
                                                ) : (
                                                    <MediaThumb key={mIdx} src={m.src} alt={m.caption || item.name} />
                                                )
                                            ))
                                        }
                                    </MediaGrid>
                                ) : (
                                    <EmptyMedia>No media yet</EmptyMedia>
                                )
                            }
                        </HobbyCard>
                    ))
                }
            </HobbyGrid>
        </div>
    )
}

export default Hobbies
