import React, { useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import "./detail.style.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailStartAsyncs } from "../../store/dataApi/dataApi.action";
import ImgDefault from "../../assets/imgs/img-hero.jpg";
import {
	detailData,
	directingArr,
	loadingCast,
	loadingDetail,
	writerArr,
} from "../../store/dataApi/dataApi.selector";
import LoadingSection from "../../components/loadingSection/loadingSection.component";

const Detail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { type, id } = useParams();

	const detail = useSelector(detailData);
	const writer = useSelector(writerArr);
	const directing = useSelector(directingArr);
	const isLoadingDetail = useSelector(loadingDetail);
	const isLoadingCast = useSelector(loadingCast);
	console.log(detail);
	console.log(writer);
	console.log(directing);

	useEffect(() => {
		dispatch(fetchDetailStartAsyncs(type, id));
	}, []);

	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			{isLoadingDetail && isLoadingCast ? (
				<LoadingSection />
			) : (
				<>
					{detail && writer && directing && (
						<div
							className="detail-container"
							style={{
								backgroundImage: `url(${
									detail.backdrop_path
										? "https://image.tmdb.org/t/p/original" +
										  detail.backdrop_path
										: ImgDefault
								})`,
							}}
						>
							<div className="detail-overlay">
								<div onClick={goBack}>
									<BackIcon className="back-button" />
								</div>
								<div className="detail-info">
									<div className="detail-group right">
										<h2 className="detail-heading">Directing</h2>
										<h3 className="detail-subheading">
											{directing.length > 0 ? directing[0].name : "-"}
										</h3>
									</div>
									<div className="detail-group left">
										<h2 className="detail-heading">Genre</h2>
										<h3 className="detail-subheading">
											{detail.genres && detail.genres.length > 0
												? detail.genres[0].name
												: "-"}
										</h3>
									</div>
									<div className="detail-group right">
										<h2 className="detail-heading">Writer</h2>
										<h3 className="detail-subheading">
											{writer.length > 0 ? writer[0].name : "-"}
										</h3>
									</div>
									<div className="detail-title">
										<h1>
											{detail.title || detail.name}
											{detail.original_title &&
												detail.original_title !== detail.title &&
												detail.original_title !== detail.name &&
												"/" + detail.original_title}
										</h1>
										<p>{detail.overview}</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Detail;
