import React from 'react';
import styled from 'styled-components'


interface IProps {
  title: string
  id?: string
}

const StyledDiv = styled.div`
  min-height: 75vh;
  border: 1px solid red;

`

const MockSection = ({title, id}: IProps) => {
  return (
    <StyledDiv id={ id }>  
      <h3>{ title }</h3>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, atque sunt a soluta veritatis ipsa ad ea, fugit dolore voluptas esse minus libero, sint nisi molestiae expedita illo voluptatibus! Quia molestias atque, illum perferendis accusantium quo ad fugit necessitatibus veritatis totam. Facilis corrupti rerum quam eos, necessitatibus ullam eum repellendus aperiam saepe magni ex? Aperiam laboriosam animi nisi ea atque numquam incidunt cupiditate, tenetur reprehenderit impedit. Impedit numquam repellendus porro amet? Sed magni quam voluptatibus adipisci quae dicta deserunt placeat porro ipsa, saepe blanditiis quos id harum dolor veritatis unde doloribus ducimus vel itaque mollitia nisi. Veniam similique repellendus voluptatibus. Consequatur at ad mollitia ab nam, sapiente et repudiandae culpa dicta. Repellendus recusandae libero fuga eum possimus excepturi, magnam quo ullam molestiae, ea iusto labore? Harum officia voluptatum maiores laboriosam ea id eum, dicta autem! Vitae illum quidem eius iure non delectus eligendi aperiam optio atque. Accusamus cum quidem expedita deserunt ratione earum tempore, aliquam dignissimos, sit nobis quasi? Illum labore perspiciatis ab rerum blanditiis, unde veniam, porro minus rem ea beatae quisquam qui sapiente totam expedita nihil. Atque voluptate unde eum voluptatem cupiditate qui culpa officiis quisquam ab provident corporis aliquam ut tempore eos odit illo exercitationem nemo ea, nesciunt sint harum nulla. Nostrum repellat id dolor recusandae deserunt blanditiis ipsum provident voluptatibus illo quas cum, est voluptatem doloremque enim, velit expedita. Non accusantium dolor nobis repellendus beatae fuga cum, ea aliquam cumque hic corrupti, nihil sed est aliquid sapiente atque velit eveniet ipsum itaque. Tenetur labore possimus quisquam placeat atque delectus eligendi reiciendis at sunt odio ipsum in quidem ducimus doloribus, obcaecati porro quo distinctio beatae consectetur saepe vitae. Laudantium nemo eum dignissimos dolorum molestias dicta adipisci impedit odio omnis, accusamus unde non. Laudantium praesentium amet numquam! Deleniti dolore magni eaque, ipsa praesentium ducimus beatae iusto commodi quam optio voluptates molestiae. Qui dolorem natus cum at tenetur eligendi quasi laudantium esse vero dignissimos? Eligendi quo nesciunt, possimus, consequuntur eaque enim rerum necessitatibus tenetur recusandae blanditiis, aspernatur in? Doloremque, placeat, similique quas consequatur pariatur fugiat omnis ad ducimus cupiditate unde animi quo molestiae eos sequi aspernatur veritatis mollitia dicta facilis voluptates. Accusamus dolores doloribus esse. Sed nobis excepturi molestias ad, obcaecati accusamus dignissimos deserunt non? Laboriosam in, expedita cupiditate accusamus molestias nostrum eos minima itaque quaerat deserunt, corrupti, natus ipsa beatae. Pariatur a autem alias magni consequuntur perspiciatis, facilis, cupiditate dolor similique voluptatem consequatur. Amet, voluptatum. Culpa nam laborum praesentium, aliquam numquam facilis quos similique. Illum, eos praesentium ducimus, tenetur, perspiciatis repellendus magni molestias eum quae ab quos quo dicta distinctio mollitia quas. Nesciunt aspernatur, quo eveniet vero architecto tenetur modi recusandae harum voluptas amet. Eum, explicabo. Necessitatibus, praesentium, excepturi eaque eum quia facere porro in saepe consectetur impedit quod inventore voluptatibus, veniam sed quidem voluptate sit. Dicta fugit nihil cumque libero adipisci nostrum aliquid autem eius excepturi? Tenetur amet exercitationem omnis aut possimus excepturi natus alias adipisci porro eveniet, voluptates fugiat corporis, saepe inventore. Dolor minus suscipit harum omnis nobis modi iusto tempore, placeat, odio ea maiores! Iure.
    </StyledDiv>
    )
}

export default MockSection