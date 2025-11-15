import { memo } from "react";
import { Button } from "../utility/Button/Button";
import { TitleHeader } from "../utility/TitleHeader";

export const Offer = memo(() => (
    <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5 justify-content-start">
                <div className="col-lg-7">

                    <TitleHeader
                        title="Special Offer"
                        subTitle="Save 50% on all items your first order"
                        color="dark"
                    />

                    <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>

                    <Button
                        text="Shop Now"
                        variant="btnLight"
                    />

                    <Button
                        text="Read More"
                    />

                </div>
            </div>
        </div>
    </div>
));

Offer.displayName = "Offer";